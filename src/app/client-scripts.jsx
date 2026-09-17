'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Load and execute the shared script.js
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Fallback for hash links: a fresh document load + hydration does not always
  // scroll to the fragment, so scroll to it manually once the page is ready.
  useEffect(() => {
    let timer = null;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#') return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        try {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } catch (err) {
          // invalid selector (e.g. "#1abc") - ignore silently
        }
      }, 300);
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return null;
}
