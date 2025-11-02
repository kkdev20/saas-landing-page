import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full px-4 py-2 bg-background border border-border rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
        'transition-all duration-200',
        className
      )}
      {...props}
    />
  );
}
