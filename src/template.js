export default ({bodyClassNames, assets, html, head}) =>
  `
  <!doctype html>
  <html lang="en">
    <head>

      ${head.title.toString()}
      ${head.meta.toString()}

      <script>
        (function(d) {
          var config = {
            kitId: 'pjs1bqz',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
      </script>

      ${assets.style.map((href) =>
        `<link rel="stylesheet" href="${href}"/>`
      )}

    </head>

    <body class="${bodyClassNames}">

      <div id="root">${html}</div>

      ${assets.script.map((src) =>
        `<script async defer src="${src}"/>`
      )}
    </body>

  </html>
  `
