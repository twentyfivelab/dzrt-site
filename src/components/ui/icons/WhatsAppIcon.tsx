"use client";

import { useId } from "react";

export function WhatsAppIcon({ className }: { className?: string }) {
  const uid = useId();
  const gradientId = `${uid}-whatsapp-gradient`;

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--color-rose-400)" }} />
          <stop offset="50%" style={{ stopColor: "var(--color-peach-400)" }} />
          <stop offset="100%" style={{ stopColor: "var(--color-apricot-400)" }} />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5C6.7 2.5 2.5 6.7 2.5 12c0 1.83.51 3.54 1.4 5l-1.44 4.5 4.65-1.4c1.4.79 3.02 1.24 4.74 1.24 5.3 0 9.5-4.2 9.5-9.5S17.3 2.5 12 2.5Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 8.7c.4-.9 1.1-1.4 1.9-1.4.2 0 .4.1.5.3l1.1 2.4c.1.3.1.6-.1.8l-.7.9c-.1.2-.1.4 0 .6.8 1.5 2.1 2.8 3.6 3.6.2.1.4.1.6 0l.9-.7c.2-.2.5-.2.8-.1l2.4 1.1c.2.1.3.3.3.5 0 .8-.5 1.5-1.4 1.9-.5.2-1 .3-1.6.3-3.9 0-8.5-4.6-8.5-8.5 0-.6.1-1.1.3-1.6Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
