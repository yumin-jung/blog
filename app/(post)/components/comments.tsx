'use client';

import React from "react";
import { useEffect, useRef } from "react";

export default function Comments() {
 const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('src', 'https://giscus.app/client.js');
    script.setAttribute('data-repo', 'yumin-jung/blog');
    script.setAttribute('data-repo-id', 'R_kgDONLudmQ');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDONLudmc4CkFWi');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');

    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme') || 'system';
      script.setAttribute('data-theme', theme);
    }

    try {
      ref.current?.appendChild(script);
    } catch (error) {
      console.error('Error while rendering giscus widget.', error);
    }
  }, []);

  const changeGiscusTheme = (theme: string) => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: theme,
          },
        },
      },
      'https://giscus.app',
    );
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key) {
        changeGiscusTheme(event.key);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return <div ref={ref}></div>;
};