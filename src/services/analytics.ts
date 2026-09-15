const GOOGLE_ADS_DEMO_BOOKED_SEND_TO = 'AW-18412374291/EgmLCKnNpfgcEJOS2stE';
const HUBSPOT_MEETINGS_ORIGIN = /^https:\/\/meetings(-[a-z0-9]+)?\.hubspot\.com$/;

const pushToHubSpot = (command: unknown[]) => {
  const w = window as any;
  w._hsq = w._hsq || [];
  w._hsq.push(command);
};

export function trackHubSpotPageView(path: string) {
  pushToHubSpot(['setPath', path]);
  pushToHubSpot(['trackPageView']);
}

// The Google tag keeps the latest ad click in the _gcl_aw cookie as GCL.<timestamp>.<gclid>.
const googleAdsClickId = () => {
  const cookie = document.cookie.split('; ').find((entry) => entry.startsWith('_gcl_aw='));
  return cookie?.split('.').slice(2).join('.') || undefined;
};

export function listenForDemoBookings() {
  const handleMessage = (event: MessageEvent) => {
    if (!HUBSPOT_MEETINGS_ORIGIN.test(event.origin) || !event.data?.meetingBookSucceeded) return;

    (window as any).gtag?.('event', 'conversion', { send_to: GOOGLE_ADS_DEMO_BOOKED_SEND_TO });

    const email = event.data.meetingsPayload?.bookingResponse?.postResponse?.contact?.email;
    const clickId = googleAdsClickId();
    if (email && clickId) {
      // Saves the ad click on the HubSpot contact so qualified leads and customers can be uploaded to Google Ads.
      pushToHubSpot(['identify', { email, hs_google_click_id: clickId }]);
      pushToHubSpot(['trackPageView']);
    }
  };

  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}
