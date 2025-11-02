'use client';

import { Button } from '@/components/ui/Button';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const locale = useLocale();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-foreground/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href={`/${locale}`}>
          <Button variant="primary">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
