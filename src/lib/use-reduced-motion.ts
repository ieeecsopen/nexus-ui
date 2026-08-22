import { useEffect, useState } from 'react';

export type ReducedMotionPreference = 'no-preference' | 'reduce';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Track the OS-level `prefers-reduced-motion` setting.
 *
 * SSR-safe: returns 'no-preference' on the server and during the first client
 * render, then adopts the real preference after mount. Components should treat
 * 'reduce' as "skip large movement; an instant or fade-only transition is fine"
 * — motion can trigger vestibular symptoms, so this is an accessibility need,
 * not a cosmetic toggle.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    setReduced(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
