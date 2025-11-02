'use client';

import { motion } from 'framer-motion';

export function DashboardMockup() {
  return (
    <div className="relative w-full bg-background rounded-lg overflow-hidden border border-border shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 mx-4 px-3 py-1 bg-background rounded text-xs text-foreground/60 text-center">
          app.cloudsync.com
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-6 w-32 bg-primary/20 rounded mb-2" />
            <div className="h-4 w-48 bg-secondary rounded" />
          </div>
          <div className="h-10 w-24 bg-primary rounded-lg" />
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="h-3 w-20 bg-foreground/20 rounded mb-2" />
              <div className="h-8 w-16 bg-primary/30 rounded mb-1" />
              <div className="h-2 w-24 bg-foreground/10 rounded" />
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="bg-secondary/30 rounded-lg p-4 border border-border">
          <div className="h-4 w-32 bg-foreground/20 rounded mb-4" />
          <div className="h-48 flex items-end gap-2">
            {[40, 60, 45, 80, 55, 70, 50].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-primary to-purple-600 rounded-t"
              />
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary/30 rounded-lg p-4 border border-border">
            <div className="h-4 w-24 bg-foreground/20 rounded mb-3" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600" />
                <div className="flex-1">
                  <div className="h-3 w-full bg-foreground/20 rounded mb-1" />
                  <div className="h-2 w-2/3 bg-foreground/10 rounded" />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-secondary/30 rounded-lg p-4 border border-border">
            <div className="h-4 w-24 bg-foreground/20 rounded mb-3" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="h-2 flex-1 bg-foreground/10 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
