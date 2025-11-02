'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Integrations() {
  const t = useTranslations('integrations');

  // Integration logos with icons
  const integrations = [
    { name: 'Slack', color: 'from-purple-500 to-pink-500', icon: '💬' },
    { name: 'GitHub', color: 'from-gray-700 to-gray-900', icon: '🐙' },
    { name: 'Google', color: 'from-blue-500 to-red-500', icon: '🔍' },
    { name: 'Microsoft', color: 'from-blue-600 to-blue-800', icon: '🪟' },
    { name: 'Notion', color: 'from-gray-900 to-black', icon: '📝' },
    { name: 'Figma', color: 'from-purple-600 to-pink-600', icon: '🎨' },
    { name: 'Jira', color: 'from-blue-500 to-blue-700', icon: '📋' },
    { name: 'Trello', color: 'from-blue-400 to-blue-600', icon: '📌' },
    { name: 'Asana', color: 'from-pink-500 to-orange-500', icon: '✅' },
    { name: 'Zoom', color: 'from-blue-400 to-blue-600', icon: '📹' },
    { name: 'Dropbox', color: 'from-blue-500 to-blue-700', icon: '📦' },
    { name: 'AWS', color: 'from-orange-500 to-orange-700', icon: '☁️' },
    { name: 'Stripe', color: 'from-indigo-500 to-purple-600', icon: '💳' },
    { name: 'Salesforce', color: 'from-blue-400 to-blue-600', icon: '☁️' },
    { name: 'Zapier', color: 'from-orange-400 to-red-500', icon: '⚡' },
    { name: 'HubSpot', color: 'from-orange-500 to-orange-700', icon: '🎯' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="integrations" className="py-20">
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
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 mb-12"
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="aspect-square glass rounded-xl flex flex-col items-center justify-center cursor-pointer group transition-all hover:shadow-lg border border-border/50"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-md`}>
                <span className="text-2xl md:text-3xl">{integration.icon}</span>
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors text-center px-1">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button variant="outline">
            {t('button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
