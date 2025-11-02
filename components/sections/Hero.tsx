'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { DashboardMockup } from '../ui/DashboardMockup';
import { Play } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');
  const buttons = useTranslations('buttons');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-mesh top-1/4 -left-1/4 float" />
        <div className="gradient-mesh bottom-1/4 -right-1/4 float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            {t('headline')}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto"
          >
            {t('subheadline')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button variant="primary" size="lg">
              {t('ctaPrimary')}
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              {t('ctaSecondary')}
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-foreground/60"
          >
            {t('trustBadge')}
          </motion.p>

          {/* Trusted by logos */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-70"
          >
            {[
              { name: 'TechCorp', color: 'from-blue-500 to-cyan-500' },
              { name: 'InnovateLab', color: 'from-purple-500 to-pink-500' },
              { name: 'StartupHub', color: 'from-green-500 to-emerald-500' },
              { name: 'CloudFirst', color: 'from-orange-500 to-red-500' },
              { name: 'ScaleUp', color: 'from-indigo-500 to-blue-500' },
              { name: 'DesignCo', color: 'from-violet-500 to-purple-500' },
            ].map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 backdrop-blur-sm"
              >
                <div className={`text-sm font-semibold bg-gradient-to-r ${company.color} bg-clip-text text-transparent`}>
                  {company.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-4 md:p-6 shadow-2xl border border-border/50">
              <DashboardMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
