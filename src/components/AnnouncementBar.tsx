import { bakeryConfig } from '@/data/bakeryConfig';
import { Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  if (!bakeryConfig.announcement) return null;

  return (
    <div className="bg-chocolate-600 text-cream-100">
      <div className="container-bakery flex items-center justify-center gap-2 py-2.5 px-4 text-center">
        <Sparkles className="hidden sm:block h-3.5 w-3.5 shrink-0 text-caramel-300" aria-hidden />
        <p className="text-[0.72rem] sm:text-xs font-light tracking-wide leading-snug">
          {bakeryConfig.announcement}
        </p>
      </div>
    </div>
  );
}
