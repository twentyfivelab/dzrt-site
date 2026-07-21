"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * @next/third-parties' <GoogleAnalytics> only fires gtag's initial pageview
 * on first load. The App Router doesn't reload the document on navigation,
 * so client-side route changes need to be reported explicitly.
 */
export function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // The initial pageview is already sent by GoogleAnalytics' gtag('config', ...) call.
      isFirstRender.current = false;
      return;
    }

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    sendGAEvent("event", "page_view", { page_path: pagePath });
  }, [pathname, searchParams]);

  return null;
}
