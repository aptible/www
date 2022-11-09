import React from 'react';
import PropTypes from 'prop-types';

const googleAnalyticsJs = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-47673806-3');
`;

const linkedIn = `
  _linkedin_partner_id = "42067";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  (function(l) {
    if (!l) {
      window.lintrk = function(a,b){
        window.lintrk.q.push([a,b])
      };
      window.lintrk.q=[]
    }
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
  })(window.lintrk);
`;

const aptibleJs = `
      (function(a,p,t,i,b,l,e) {
        a.aptible=a.aptible||{_q:[]};f='event,identify'.split(',');
        l=function(n){return function(){a.aptible._q.push([n,Array.prototype.slice.call(arguments)])}};
        for(e=0;e<f.length;e++){a.aptible[f[e]]=l(f[e])};
        i=p.createElement(t);i.type='text/javascript';i.async=1;i.src="/aptible.js";
        b=p.getElementsByTagName(t)[0];b.parentNode.insertBefore(i,b);
      })(window, document, 'script');
`;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script dangerouslySetInnerHTML={{ __html: linkedIn }} />
        <script dangerouslySetInnerHTML={{ __html: aptibleJs }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-47673806-3"></script>
        <script dangerouslySetInnerHTML={{ __html: googleAnalyticsJs }} />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
