'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Users, CheckSquare, Clock, BarChart3, Folder, Plug } from 'lucide-react';

export function Features() {
  const t = useTranslations('features');

  const features = [
    {
      icon: Users,
      key: 'realTimeCollab',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: CheckSquare,
      key: 'taskManagement',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      key: 'timeTracking',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart3,
      key: 'analytics',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Folder,
      key: 'fileSharing',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Plug,
      key: 'integrations',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.key} variants={itemVariants}>
                <Card hover className="h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="text-foreground/70">
                    {t(`${feature.key}.description`)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
