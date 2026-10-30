import { useCallback, useEffect, useState } from 'react';

/** Controla el menú móvil: se cierra con Escape o al pasar a escritorio. */
export default function useMobileMenu(desktopBreakpoint = 960) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((open) => !open), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => e.key === 'Escape' && setIsOpen(false);
    const onResize = () => window.innerWidth >= desktopBreakpoint && setIsOpen(false);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen, desktopBreakpoint]);

  return { isOpen, toggle, close };
}
