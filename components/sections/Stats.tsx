'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Zap, Puzzle, Headphones } from 'lucide-react';

function useCountUp(isInView: boolean, end: number, suffix: string, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      if (suffix === '%') {
        setCount(Number((end * progress).toFixed(1)));
      } else {
        setCount(Math.floor(end * progress));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, suffix, duration]);

  return count;
}

function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  suffix, 
  isInView 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: number; 
  suffix: string; 
  isInView: boolean;
}) {
  const count = useCountUp(isInView, value, suffix);
  
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <p className="text-foreground/70 text-sm md:text-base">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const t = useTranslations('stats');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Users, key: 'activeUsers', value: 10000, suffix: '+' },
    { icon: Zap, key: 'uptime', value: 99.9, suffix: '%' },
    { icon: Puzzle, key: 'integrations', value: 50, suffix: '+' },
    { icon: Headphones, key: 'support', value: 24, suffix: '/7' },
  ];

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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                variants={itemVariants}
              >
                <StatCard
                  icon={Icon}
                  label={t(stat.key)}
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
