'use client';

export function Watermark() {
  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-30 hover:opacity-100 transition-opacity">
      <a
        href="https://wistackt.site"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-foreground/60 hover:text-primary transition-colors flex items-center gap-1"
      >
        <span>Made by</span>
        <span className="font-semibold">wistackt.site</span>
      </a>
    </div>
  );
}
