module.exports = function Template (opts) {
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
  `;
};
