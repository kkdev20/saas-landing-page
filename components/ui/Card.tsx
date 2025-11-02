'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={cn(
        'bg-background border border-border rounded-xl p-6 shadow-sm',
        hover && 'hover:shadow-lg transition-shadow',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
