---
layout: post
title:  "Styleguide"
date:   2014-11-11 22:07
category: webdev
tags: css html
---

# This is a heading 1

## This is a heading 2

### This is a heading 3

#### This is a heading 4

In many of the more [relaxed](http://earth) civilizations on the `Outer Eastern Rim of the Galaxy`, the *Hitchhiker's Guide* has already supplanted the great **Encyclopaedia Galactica** as the standard repository of all knowledge and wisdom, for though it has many omissions and contains much that is apocryphal, or at least wildly inaccurate, it scores over the older, more pedestrian work in two important respects.
First, it is slightly cheaper; and secondly it has the words **DON'T PANIC** inscribed in large friendly letters on its cover.

Javascript:

```js
(function setNightMode () {
  // Night mode 9pm to 7am
  var now = new Date().getHours();
  if (now >= 21 || now < 7) {
    document.documentElement.className += ' is-night';
  }
})(window, document);
```

HTML:

```html
<link rel="stylesheet" href="{{ "/css/main.css" | prepend: site.baseurl }}">
<link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
<link rel="alternate" type="application/atom+xml" title="{{ site.title }}" href="{{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }}" />
```

Jade:

```jade
html
  head
  body
    h1 here's some jade
```

Stylus:

```stylus
body
  background red
  color orange
```