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
        d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.5.4 2.9 1.1 4.2L3.5 20.5l4.4-1.1c1.2.7 2.6 1.1 4.1 1.1 4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 1.9 1.2 2.2 1.4.3.1.5.1.6-.1.2-.2.6-.7.8-.9.2-.2.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.3.2.4.3.1.2.1.9-.2 1.6-.3.7-1.5 1.4-2.1 1.4-.6.1-1.1.1-3.7-1-2.9-1.2-4.8-4.1-4.9-4.3-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.8-2.1Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}
