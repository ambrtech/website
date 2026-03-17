import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

export function Analytics() {
  return (
    <>
      {/* ClickCease */}
      <Script
        id="clickcease"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var script=document.createElement('script');script.async=true;script.type='text/javascript';script.src='https://www.clickcease.com/monitor/stat.js';document.head.appendChild(script);`,
        }}
      />

      {/* Intercom */}
      {INTERCOM_APP_ID && (
        <Script
          id="intercom"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.intercomSettings={api_base:"https://api-iam.intercom.io",app_id:"${INTERCOM_APP_ID}"};(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`,
          }}
        />
      )}
    </>
  )
}

export function GTMNoScript() {
  if (!GTM_ID) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

export function LinkedInNoScript() {
  if (!LINKEDIN_PARTNER_ID) return null
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        alt=""
        src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
      />
    </noscript>
  )
}

export function ClickCeaseNoScript() {
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <a href="https://www.clickcease.com" rel="nofollow">
        <img src="https://monitor.clickcease.com" alt="ClickCease" />
      </a>
    </noscript>
  )
}
