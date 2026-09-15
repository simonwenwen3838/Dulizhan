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

  return null;
}
