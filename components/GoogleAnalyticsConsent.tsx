'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-FZGVZBFEH7';
const CONSENT_STORAGE_KEY = 'donguk-kim-analytics-consent';

type AnalyticsConsent = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function removeAnalyticsCookies() {
  document.cookie.split(';').forEach((cookie) => {
    const cookieName = cookie.split('=')[0]?.trim();

    if (cookieName === '_ga' || cookieName?.startsWith('_ga_')) {
      document.cookie = `${cookieName}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  });
}

export default function GoogleAnalyticsConsent() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (savedConsent === 'granted' || savedConsent === 'denied') {
      setConsent(savedConsent);
    } else {
      setShowSettings(true);
    }
  }, []);

  useEffect(() => {
    if (consent !== 'granted' || !isReady || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [consent, isReady, pathname]);

  const updateConsent = (nextConsent: AnalyticsConsent) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextConsent);
    setConsent(nextConsent);
    setShowSettings(false);

    if (nextConsent === 'denied') {
      removeAnalyticsCookies();
    }
  };

  const initializeAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    setIsReady(true);
  };

  return (
    <>
      {consent === 'granted' && (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
          strategy="afterInteractive"
          onLoad={initializeAnalytics}
        />
      )}

      {showSettings && (
        <section
          className="analytics-consent"
          role="dialog"
          aria-modal="true"
          aria-labelledby="analytics-consent-title"
          aria-describedby="analytics-consent-description"
        >
          <div>
            <p id="analytics-consent-title" className="analytics-consent-title">
              Analytics cookies
            </p>
            <p id="analytics-consent-description" className="analytics-consent-copy">
              This site uses Google Analytics to understand visits by page and
              approximate country or city. Google Analytics does not provide or
              store your individual IP address for this site.
            </p>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => updateConsent('denied')}>
              Decline
            </button>
            <button
              type="button"
              className="analytics-consent-accept"
              onClick={() => updateConsent('granted')}
            >
              Allow analytics
            </button>
          </div>
        </section>
      )}

      {!showSettings && consent !== null && (
        <button
          type="button"
          className="analytics-settings-button"
          onClick={() => setShowSettings(true)}
          aria-label="Open analytics cookie settings"
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
