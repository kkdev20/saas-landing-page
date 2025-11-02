'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { ProductMockup } from '../ui/ProductMockup';
import { LayoutDashboard, Kanban, MessageSquare, TrendingUp } from 'lucide-react';

function ProductDemoMockups({ tabs, activeTab }: { tabs: Array<{ id: string; mockup: 'dashboard' | 'kanban' | 'chat' | 'analytics' }>, activeTab: string }) {
  const activeMockup = tabs.find(t => t.id === activeTab)?.mockup || 'dashboard';

  return (
    <div className="glass rounded-2xl p-4 md:p-6 shadow-2xl border border-border/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <ProductMockup type={activeMockup} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function ProductDemo() {
  const t = useTranslations('productDemo');
  const buttons = useTranslations('buttons');
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: t('tabs.dashboard'), icon: LayoutDashboard, mockup: 'dashboard' as const },
    { id: 'projectBoard', label: t('tabs.projectBoard'), icon: Kanban, mockup: 'kanban' as const },
    { id: 'teamChat', label: t('tabs.teamChat'), icon: MessageSquare, mockup: 'chat' as const },
    { id: 'analytics', label: t('tabs.analytics'), icon: TrendingUp, mockup: 'analytics' as const },
  ];

  const demoContent = [
    {
      title: 'Dashboard Overview',
      description: 'Get a comprehensive view of all your projects, team activity, and key metrics in one place.',
      benefits: [
        'Real-time project status updates',
        'Team productivity insights',
        'Customizable widgets',
        'Quick access to recent activities',
      ],
    },
    {
      title: 'Project Board',
      description: 'Organize tasks with drag-and-drop kanban boards, assign team members, and track progress.',
      benefits: [
        'Visual task management',
        'Custom workflow columns',
        'Task dependencies',
        'Sprint planning tools',
      ],
    },
    {
      title: 'Team Chat',
      description: 'Communicate seamlessly with your team through integrated chat, video calls, and file sharing.',
      benefits: [
        'Real-time messaging',
        'Video and voice calls',
        'File sharing and storage',
        'Thread conversations',
      ],
    },
    {
      title: 'Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and reporting tools.',
      benefits: [
        'Performance metrics',
        'Custom reports',
        'Time tracking analysis',
        'Team workload insights',
      ],
    },
  ];

  return (
    <section id="product-demo" className="py-20 bg-secondary/20">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? 'text-primary'
                        : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {demoContent.map((content, index) => {
                    if (tabs[index].id !== activeTab) return null;
                    const Icon = tabs[index].icon;
                    return (
                      <div key={index}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">{content.title}</h3>
                        </div>
                        <p className="text-foreground/70 mb-6">{content.description}</p>
                        <ul className="space-y-3 mb-6">
                          {content.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-foreground/80">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline">
                          {t('learnMore')}
                        </Button>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ProductDemoMockups tabs={tabs} activeTab={activeTab} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}