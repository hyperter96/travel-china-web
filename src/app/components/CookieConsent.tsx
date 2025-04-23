'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 检查localStorage中是否已经有cookie同意记录
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // 如果没有记录，显示横幅
      setIsVisible(true);
    }
  }, []);

  // 接受所有cookies
  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  // 仅接受必要的cookies
  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg z-50 transition-transform duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">We Use Cookies</h3>
            <p className="text-sm text-foreground/80 mb-2">
              We use cookies to enhance your browsing experience, provide personalized content and ads, 
              and analyze website traffic. By continuing to use our website, you consent to our use of cookies.
            </p>
            <a href="/privacy-policy" className="text-sm text-primary hover:underline">
              Learn more about our Cookie Policy
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 min-w-max">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm border border-primary text-primary hover:bg-primary/10 rounded-md transition-colors"
            >
              Accept Necessary Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary/90 rounded-md transition-colors"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 