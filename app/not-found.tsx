import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-foreground/70 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link href="/en">
              <Button variant="primary">Go Home</Button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
