'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';

export function FAQ() {
  const t = useTranslations('faq');

  const faqItems = t.raw('items') as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section id="faq" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion items={faqItems} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-4">
            {t('stillHaveQuestions')}
          </p>
          <Button variant="outline">
            {t('stillHaveQuestions')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
