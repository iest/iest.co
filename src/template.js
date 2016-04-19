import React, {PropTypes} from 'react';

const Template = ({bodyClassNames, assets, html}) =>
  <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>iest.co</title>
      <script dangerouslySetInnerHTML={{__html: `
        (function(d) {
          var config = {
            kitId: 'pjs1bqz',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
        `}}>
      </script>
      {assets.style.map((href, i) =>
        <link key={i} rel="stylesheet" href={href}/>
      )}
    </head>
    <body className={bodyClassNames}>
      <div id="root" dangerouslySetInnerHTML={{__html: html}}/>
      {assets.script.map((src, i) =>
        <script key={i} async defer src={src}/>
      )}
    </body>
  </html>;

Template.propTypes = {
  bodyClassNames: PropTypes.string,
  assets: PropTypes.object,
  html: PropTypes.string,
}

export default Template;
