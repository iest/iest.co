---
layout: post
title:  "Progressive Enhancement: Raising the bar"
date:   2013-8-12 16:46:29
category: webdev
tags: progressive-enhancement
---

## Progressive enhancement has become a bit of a catch-all term these days (like responsive web design), but it's original definition was as an alternative to *graceful degradation*.

In older days, web builders would focus on building for the most advanced/capable browsers first, allowing web pages to *degrade* in functionality on older/less capable browsers. However, this often meant that the basic content of a site wasn't even accessible on those older browsers.

In real terms, [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) works in the opposite way: start with the content, then build layers of enhancement on top. The end result is that any browser can access the basic content, whilst the more capable browsers have a more enhanced (and probably better) user experience.

In the last few years however, browsers have become more and more powerful. This power has allowed us web builders to create increasingly complex client-side apps that can compete with the user experience of native applications, whilst still being platform-agnostic.

Now, when I think about the best software in the world, I think about native iOS apps like [Clear](http://realmacsoftware.com/clear), [Tweetbot](http://tapbots.com/software/tweetbot/), and [Mailbox](http://www.mailboxapp.com/). The developers of these apps are able to create great user experiences because they *know* the environment the software will run in. There's no concept of styles being disabled, or javascript not being available. The apps are already downloaded and installed, ready to go. The minimum barrier to entry is an iOS device from the last 3 years.

There's no concept of progressive enhancement on these native platforms because the minimum level of functionality required for an app to work is the same for all devices.

On the web, we don't have that luxury. We can't assume what environment a web site or app will be accessed. **But that doesn't mean we don't have a minimum barrier to entry**. We *do*, even if it's usually the ability to render HTML properly.

So, progressive enhancment is all about ensuring that the barrier to entry is as low as possible. But what if you're building something that just *can't* be done with plain old HTML?

**You're going to have to raise that barrier to entry.**
And you know what? That's *fine*.

If you're building a site that can't perform it's function without CSS (like Google Web Fonts, or Typekit), that's fine.

If you're building an app that can't function without javascript (like Codepen, or Google Drive), that's fine too.

If we never raised that bar, then the web would never move forward.