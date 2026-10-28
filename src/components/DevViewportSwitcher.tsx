import { useState, type ReactNode } from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

type Device = 'full' | 'tablet' | 'mobile';

const devices: { id: Device; label: string; width: number; icon: typeof Monitor }[] = [
  { id: 'full', label: 'Desktop', width: 0, icon: Monitor },
  { id: 'tablet', label: 'Tablet', width: 768, icon: Tablet },
  { id: 'mobile', label: 'Mobile', width: 390, icon: Smartphone },
];

const isPreviewFrame =
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('devframe');

/**
 * Development-only viewport switcher. Tablet and Mobile load the real page in an
 * iframe so media queries respond to the chosen width. Renders children unchanged
 * in production and inside the preview iframe itself.
 */
export default function DevViewportSwitcher({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState<Device>('full');

  if (!import.meta.env.DEV || isPreviewFrame) return <>{children}</>;

  const current = devices.find((d) => d.id === device)!;

  return (
    <>
      {device === 'full' ? (
        children
      ) : (
        <div className="flex min-h-dvh justify-center bg-chocolate-700 px-3 pt-4 pb-24">
          <iframe
            key={device}
            src={`${window.location.pathname}?devframe`}
            title={`${current.label} preview of the Jai Punjab Bakery website`}
            style={{ width: current.width, maxWidth: '100%', height: 'calc(100dvh - 7.5rem)' }}
            className="rounded-2xl bg-cream-100 shadow-card"
          />
        </div>
      )}

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[70]">
        <div className="flex items-center gap-1 bg-chocolate-600/95 backdrop-blur-md rounded-full px-2 py-1.5 shadow-card border border-cream-100/10">
          <span className="hidden sm:inline-block text-[0.65rem] text-cream-200/60 font-light px-2 tracking-wider uppercase">
            Preview
          </span>
          {devices.map((d) => {
            const active = device === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setDevice(d.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? 'bg-caramel-500 text-cream-100'
                    : 'text-cream-200/70 hover:text-cream-100 hover:bg-cream-100/10'
                }`}
                aria-pressed={active}
                aria-label={`${d.label} preview`}
              >
                <d.icon className="h-3.5 w-3.5" aria-hidden />
                <span className="hidden sm:inline">{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
