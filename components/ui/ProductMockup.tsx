'use client';

import { DashboardMockup } from './DashboardMockup';

interface ProductMockupProps {
  type?: 'dashboard' | 'kanban' | 'chat' | 'analytics';
}

export function ProductMockup({ type = 'dashboard' }: ProductMockupProps) {
  if (type === 'kanban') {
    return (
      <div className="relative w-full bg-background rounded-lg overflow-hidden border border-border shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-4 px-3 py-1 bg-background rounded text-xs text-foreground/60 text-center">
            Project Board
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-4">
            {['To Do', 'In Progress', 'Done'].map((column, ci) => (
              <div key={ci} className="flex-1 bg-secondary/30 rounded-lg p-3 border border-border">
                <div className="text-sm font-semibold mb-3 text-foreground/70">{column}</div>
                <div className="space-y-2">
                  {[1, 2, ci === 0 ? 3 : 2].map((i) => (
                    <div key={i} className="bg-background rounded p-2 border border-border">
                      <div className="h-3 w-full bg-primary/20 rounded mb-1" />
                      <div className="h-2 w-3/4 bg-foreground/10 rounded mb-2" />
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-600" />
                        <div className="h-2 w-8 bg-foreground/10 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'chat') {
    return (
      <div className="relative w-full bg-background rounded-lg overflow-hidden border border-border shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-4 px-3 py-1 bg-background rounded text-xs text-foreground/60 text-center">
            Team Chat
          </div>
        </div>
        <div className="p-4 h-[400px] flex flex-col">
          <div className="flex-1 space-y-4 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex gap-3 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex-shrink-0" />
                <div className={`flex-1 ${i % 2 === 0 ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className="text-xs text-foreground/60 mb-1">User {i}</div>
                  <div className="bg-secondary rounded-lg p-3 max-w-[70%]">
                    <div className="h-3 w-full bg-foreground/20 rounded mb-1" />
                    <div className="h-2 w-2/3 bg-foreground/10 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-10 bg-secondary rounded-lg border border-border" />
            <div className="w-10 h-10 bg-primary rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'analytics') {
    return (
      <div className="relative w-full bg-background rounded-lg overflow-hidden border border-border shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-4 px-3 py-1 bg-background rounded text-xs text-foreground/60 text-center">
            Analytics Dashboard
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-secondary/30 rounded-lg p-4 border border-border">
                <div className="h-3 w-24 bg-foreground/20 rounded mb-3" />
                <div className="h-8 w-20 bg-primary/30 rounded" />
              </div>
            ))}
          </div>
          <div className="bg-secondary/30 rounded-lg p-4 border border-border">
            <div className="h-4 w-32 bg-foreground/20 rounded mb-4" />
            <div className="h-48 flex items-end justify-between">
              {[65, 75, 55, 85, 70, 90, 60, 80].map((height, i) => (
                <div
                  key={i}
                  className="w-8 bg-gradient-to-t from-primary via-purple-600 to-pink-600 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default dashboard
  return <DashboardMockup />;
}
