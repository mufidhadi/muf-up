import React from 'react';
import { ArrowUp } from 'lucide-react';

interface BrandingProps {
  className?: string;
}

export function Branding({ className = "py-6 text-center" }: BrandingProps) {
  return (
    <div className={className}>
      <div className="text-sm text-slate-400 font-medium flex items-center justify-center gap-1.5">
        Powered by 
        <span className="flex items-center gap-1 text-slate-600">
          <div className="w-5 h-5 bg-emerald-600 rounded flex items-center justify-center text-white shadow-sm">
            <ArrowUp size={12} strokeWidth={3} />
          </div>
          <span className="font-bold tracking-tight">muf-up</span>
        </span>
      </div>
    </div>
  );
}
