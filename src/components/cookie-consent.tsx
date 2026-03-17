import Script from 'next/script'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com'
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

export function CookieConsent() {
  return (
    <>
      <Script
        src="https://cdn.delve.co/src/delve-cookie-consent-4.0.js"
        strategy="beforeInteractive"
      />
      <Script id="delve-cookie-consent-init" strategy="beforeInteractive">
        {`
          DelveCookieConsent.init({
            privacyPolicyUrl: 'https://www.iubenda.com/privacy-policy/86040884',
            cookiePolicyUrl: 'https://www.iubenda.com/privacy-policy/86040884/cookie-policy',
            message: 'We use cookies to improve your experience and understand how our site is used.',
            acceptText: 'Accept',
            privacyPolicyText: 'Privacy Policy',
            settingsSubtitle: 'Manage your cookie preferences',
            settingsInfo: "We use different types of cookies to optimize your experience on our site. Choose which categories you'd like to allow.",
            acceptAllText: 'Accept all',
            ccpaEnabled: true,
            autoDismiss: true,
            integrations: [
              { name: 'gtag', category: 'analytics' },
              { name: 'google-tag-manager', id: 'GTM-KX3GMKJ' },
              { name: 'meta-pixel', pixelId: '3742356216051018' },
              { name: 'posthog' },
              { name: 'linkedin-insights' }
            ],
            scripts: [
              {
                id: 'script-hubspot',
                category: 'marketing',
                src: '//js-eu1.hs-scripts.com/26303665.js'
              },
              {
                id: 'script-framer-editor',
                category: 'other',
                textContent: 'try{if(localStorage.get("__framer_force_showing_editorbar_since")){var n=document.createElement("link");n.rel="modulepreload";n.href="https://framer.com/edit/init.mjs";document.head.appendChild(n)}}catch(e){}'
              },
              {
                id: 'script-hotjar',
                category: 'analytics',
                textContent: '(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2839593,hjsv:6};a=o.getElementsByTagName("head")[0];r=o.createElement("script");r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv=");'
              },
              {
                id: 'script-google-ads',
                category: 'other',
                textContent: 'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","AW-11387995046");'
              },
              {
                id: 'script-reditus',
                category: 'other',
                textContent: '(function(w,d,s,p,t){w.gr=w.gr||function(){w.gr.q=w.gr.q||[];w.gr.q.push(arguments);};p=d.getElementsByTagName(s)[0];t=d.createElement(s);t.async=true;t.src="https://app.getreditus.com/gr.js?_ce=90";p.parentNode.insertBefore(t,p);})(window,document,"script");gr("track","pageview");'
              },
              {
                id: 'script-segment',
                category: 'analytics',
                textContent: '!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/"+key+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="0GT3VzowJR7prJp6zd14AUXGRVGY2x5e";analytics.SNIPPET_VERSION="4.16.1";analytics.load("0GT3VzowJR7prJp6zd14AUXGRVGY2x5e");analytics.page();}}();'
              },
              {
                id: 'script-google-ads-conversion',
                category: 'other',
                textContent: 'function gtag_report_conversion(url){var callback=function(){if(typeof(url)!="undefined"){window.location=url;}};gtag("event","conversion",{"send_to":"AW-11387995046/Rp8XCJn2uPAYEKaHnLYq","event_callback":callback});return false;}'
              }${LINKEDIN_PARTNER_ID ? `,
              {
                id: 'script-linkedin',
                category: 'marketing',
                textContent: '_linkedin_partner_id="${LINKEDIN_PARTNER_ID}";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);'
              }` : ''}${POSTHOG_KEY ? `,
              {
                id: 'script-posthog',
                category: 'analytics',
                textContent: '!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init("${POSTHOG_KEY}",{api_host:"${POSTHOG_HOST}"});'
              }` : ''}
            ],
            customStyles: {
              primaryColor: '#D47234'
            }
          });
        `}
      </Script>
    </>
  )
}
