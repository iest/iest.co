module.exports = function Template(opts) {
  const bodyClassNames = opts.bodyClassNames;
  const assets = opts.assets;
  const html = opts.html;
  const head = opts.head;
  return `
  <!doctype html>
  <html lang="en">
    <head>

      ${head.title.toString()}

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="charset" content="utf-8">

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
        `<script async defer src="${src}"></script>`
      )}
    </body>

  </html>
  `
}
