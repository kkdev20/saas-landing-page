'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Pricing() {
  const t = useTranslations('pricing');
  const buttons = useTranslations('buttons');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      key: 'starter',
      popular: false,
      features: ['members', 'storage', 'features', 'support'],
    },
    {
      key: 'professional',
      popular: true,
      features: ['members', 'storage', 'features', 'support', 'analytics'],
    },
    {
      key: 'enterprise',
      popular: false,
      features: ['members', 'storage', 'features', 'support', 'sla'],
    },
  ];

  const getPrice = (planKey: string) => {
    if (planKey === 'enterprise') return t(`plans.${planKey}.price`);
    const basePrice = planKey === 'starter' ? 9 : 29;
    const price = billingPeriod === 'yearly' ? basePrice * 12 * 0.8 : basePrice;
    return `$${billingPeriod === 'yearly' ? Math.floor(price / 12) : price}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn('text-sm font-medium', billingPeriod === 'monthly' && 'text-primary')}>
              {t('monthly')}
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={cn(
                'relative w-14 h-8 rounded-full bg-secondary transition-colors',
                billingPeriod === 'yearly' && 'bg-primary'
              )}
            >
              <motion.div
                layout
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{
                  x: billingPeriod === 'yearly' ? 24 : 0,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={cn('text-sm font-medium', billingPeriod === 'yearly' && 'text-primary')}>
                {t('yearly')}
              </span>
              {billingPeriod === 'yearly' && (
                <Badge variant="success" className="text-xs">
                  {t('save20')}
                </Badge>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div key={plan.key} variants={itemVariants}>
              <Card
                hover={false}
                className={cn(
                  'relative h-full flex flex-col',
                  plan.popular && 'border-2 border-primary shadow-lg scale-105'
                )}
              >
                {plan.popular && (
                  <Badge
                    variant="primary"
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                  >
                    {t(`plans.${plan.key}.popular`)}
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {t(`plans.${plan.key}.name`)}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      {getPrice(plan.key)}
                    </span>
                    {plan.key !== 'enterprise' && (
                      <span className="text-foreground/60">
                        {billingPeriod === 'monthly' ? t('plans.starter.period') : '/year'}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="flex-1 space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        {t(`plans.${plan.key}.${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.key === 'enterprise' ? buttons('contactSales') : buttons('startTrial')}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground/60 mt-8"
        >
          {t('note')}
        </motion.p>
      </div>
    </section>
  );
}
