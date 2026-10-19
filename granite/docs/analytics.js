// SPDX-License-Identifier: Apache-2.0
// IBM Analytics — loaded via docusaurus.config.ts scripts[]

(function() {
  // Only run on IBM production domains
  if (!window.location.hostname.endsWith('.ibm.com')) {
    return;
  }

  // Set up IBM Analytics configuration
  window.idaPageIsSPA = true;
  
  // Configure digital data
  window.digitalData = {
    page: {
      category: { 
        primaryCategory: 'PC340'
      },
      pageInfo: { 
        ibm: { 
          siteId: 'granite-developer-enablement'
        }
      }
    }
  };

  // Configure IBM Analytics settings
  window._ibmAnalytics = {
    settings: { 
      name: 'granite-developer-enablement',
      isSpa: true
    }
  };

  // Load IBM Analytics library
  var script = document.createElement('script');
  script.src = 'https://1.www.s81c.com/common/stats/ibm-common.js';
  script.type = 'text/javascript';
  script.defer = true;
  document.head.appendChild(script);

  function trackPageview() {
    // Wait for IBM Analytics to load, then track pageview
    setTimeout(function() {
      if (window.ibmStats && typeof window.ibmStats.pageview === 'function') {
        window.ibmStats.pageview();
      }
    }, 100);
  }

  // Track initial page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPageview);
  } else {
    trackPageview();
  }

  if(window.navigation) {
    window.navigation.addEventListener("navigate", trackPageview)
  } else {
    window.addEventListener('popstate', trackPageview);
  }
})();