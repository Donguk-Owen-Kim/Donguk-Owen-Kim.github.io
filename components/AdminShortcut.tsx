'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

const MAX_GAP_MS = 900;

export default function AdminShortcut() {
  const router = useRouter();

  useEffect(() => {
    let count = 0;
    let lastPressedAt = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, [contenteditable="true"]')) return;
      if (event.key.toLowerCase() !== 'd') {
        count = 0;
        return;
      }
      const now = Date.now();
      count = now - lastPressedAt <= MAX_GAP_MS ? count + 1 : 1;
      lastPressedAt = now;
      if (count === 5) {
        count = 0;
        router.push('/studio');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return null;
}
