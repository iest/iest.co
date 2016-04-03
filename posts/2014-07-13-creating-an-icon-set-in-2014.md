---
layout: post
title:  "Icons for the web in 2014"
date:   2014-09-11 16:46:29
category: webdev
tags: svg icons

---

## Going for vector-based icons on the web is a no-brainer these days, but there are a few different ways you can implement them.

After joining [Busuu](http://busuu.com) at the end of March, one of the first things I set about doing was moving the product away from using a PNG-based sprite sheet, and toward a vector-based approach.

Previously, I've made heavy use of icon fonts to get the job done (especially the appropriately named [Font Awesome](http://fortawesome.github.io/Font-Awesome/)), but building your own icon font can be pretty tedious. Most font software is super clunky and complex, and there's an alternative that's a lot more flexible for the modern web: **SVG**.

Chris Coyer over at CSS-tricks has written a bunch of [awesome](http://css-tricks.com/svg-sprites-use-better-icon-fonts/) [articles](http://css-tricks.com/using-svg/) on using SVGs, as well as why they're a [better alternative](http://css-tricks.com/icon-fonts-vs-svg/) than using icon fonts.

**tl;dr** — because they're real elements, you don't have to worry about font-specific CSS issues (`line-height` etc); a single icon can have different coloured/styled parts; you don't get weird anti-aliasing issues... In short, icon fonts feel like a bit of a hack in comparison.

So, now we know SVG is better, what next?

### Step 1: Creating SVGs

Any reasonable vector-based graphics package can export as SVG. I'll show you how to do it with Sketch and Illustrator, just in case.

#### Sketch

Exporting from sketch into usable SVG couldn't be easier. Draw your shapes, wrap them in an art board, then hit export.  Select SVG, and you're good to go.

![Sketch export](/images/svg-2014/sketchExport.gif)

#### Illustrator

Pretty much the same deal as Sketch, except with a little more complication. Draw your icon and create an artboard around the icon, but then you'll need to either `Save As...` or `Save a Copy` — you can't simply "Export" SVG for some weird reason. Make sure you tick `Use Artboards` and select SVG. Then make sure the export settings are set to add as little cruft as possible. Finally, you're good to go.

<aside>Incidentally, a single Illustrator file has a limit of 100 artboards (therefore 100 icons), so bear that in mind when building your icon set.</aside>

![Illustrator export](/images/svg-2014/aiExport.gif)

### Step 2: Getting your icons rendering

There's a few different ways to get your icons to render in a browser:

#### `img` tags

```html
<img src="path/to/svg.svg">
```

You can add your SVG to your page via an `img` tag, setting the `src` attribute to be your icon's path. Nice and simple. You get the power of vector (so high-res screen-ready), but you don't get the real power of SVG yet.

#### Copy and Paste

```html
<svg>
  <rect class="logo" fill="#D8D8D8" x="0" y="0" width="100" height="100"></rect>
</svg>
```

SVG is just XML — so open an icon with your text editor of choice, and copy-paste the code into your HTML. Now you can style your icon using just CSS:

<p data-height="268" data-theme-id="0" data-slug-hash="IzBGq" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/iest/pen/IzBGq/'>IzBGq</a> by Iestyn Williams (<a href='http://codepen.io/iest'>@iest</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

#### Symbols

```html
<svg style="display: none;">
  <symbol id="logo">
    <rect fill="#D8D8D8" x="0" y="0" width="100" height="100"></rect>
  </symbol>
</svg>

<svg> <!-- anywhere you want, even multiple places -->
  <use xlink:href="logo">
</svg>
```

If you define your icons as symbols inside the SVG, you can reuse them inside your document at any point with a `use` tag:

<p data-height="268" data-theme-id="0" data-slug-hash="xcGIC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/iest/pen/xcGIC/'>xcGIC</a> by Iestyn Williams (<a href='http://codepen.io/iest'>@iest</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<small>There is a very similar method where you place the icons inside a `defs` tag on the SVG. The main difference is the pesky `viewBox` attribute, which you have to add to each `use` element when using with the defs method, which you don't have to do when using the symbol method.</small>

This allows for way more flexibility than pasting long SVG code everywhere. All you have to do is make sure that the main SVG file is included on every page you want the icons to appear.
<small>Apparently the best place to put them is just after the opening `body` tag, but it seems to work anywhere in my experience</small>.

If you look at the stylus tab on the second example above, you'll see that I've tried to make one of the icons fill with blue, but because of the `fill="red"` attribute on the `path` element of the SVG definition itself, I can't override it. So, we need to remove those `fill`s if we want to be able to style our icons using just CSS.

<aside>If you have fancy gradients on your SVGs, you have to insert these inside a <code>defs</code> tag alongside the <code>use</code> tag, otherwise they won't render.</aside>

But stripping these out manually from possibly hundreds of icons is no way to spend your day. Combining a bunch of individual icons into a single SVG symbol sheet is pretty tedious too.

For just a handful of icons this manual editing is manageable, but for larger sets where you're continually iterating, you really need the power of automation.

### Step 3: automating your workflow

Both sketch and illustrator allow for the mass-export of artboards, so we’ll use that feature to get all our icons into a folder to get us started.

The next step is to optimise your SVGs, not only stripping out `fill` tags, but also any extra crap your graphics package has left in there. 

The best tool for this job is [SVGO](https://github.com/svg/svgo), an SVG Optimiser. It's a really great tool, and has multiple interfaces. We use [gulp](http://gulpjs.com) as our build system at busuu, so we use a combination of [gulp-svg-symbols](https://github.com/Hiswe/gulp-svg-symbols) and [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin), a gulp wrapper for SVGO. There seems to be a slick [GUI version](https://github.com/svg/svgo-gui) of SVGO as well — worth checking out if you don't want to get your hands dirty with javascript.
<aside>SVGO is smart enough to rip out <code>fill="#000000"</code> from our SVG icons, so is perfect if we make sure all our icons are filled <code>#000000</code> in our graphics package.</aside>

#### Using with gulp

Using gulp to build your SVG sprite sheet is pretty straightforward. Here's our gulp task freshly ripped out of our gulpfile:

```javascript
gulp.task('sprites', function() {
  return gulp.src('./app/images/icons/icon_*.svg')
    .pipe(svgmin())
    .pipe(svgSymbols())
    .pipe(gulp.dest("./app/images/icons"));
});
```

This task will find all the icons with name "icon_*something*" (which are our art board names in Sketch) inside the icons folder, then pipe them through the `svgmin` and `svgSymbols` tasks. `svgmin` is the SVGO wrapper, so that'll strip out all the crap and return a pristine SVG for the `svgSymbols` task, which will compress all the icons into a single SVG file and plonk it back in the icons folder.

Because we also use [jade](http://jade-lang.com) at Busuu, we can really easily inject the SVG directly into all our pages on the site, using a simple `include` statement.

### Wrapping up

Hopefully I've shown you how easy it is to get SVG icons working on the web. They're easy to export, and perfect for building a reusable set of icons with. Once you get your head around the `use` syntax and how the symbol method works, they're super easy to work with.

Browser compatibility is great if you don't need to support IE8. If you are that unlucky however, there are some great [build tools](https://github.com/filamentgroup/grunticon) to create PNG versions of your SVGs. Obviously this does cut down heavily on functionality (and colouring them would be a pain), but if you're heavily relying on iconography in your project, then it'll be worth it.

If you have any feedback, questions, or comments, hit me up [on twitter](http://twitter.com/_iest)!