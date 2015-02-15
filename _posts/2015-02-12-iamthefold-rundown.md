---
layout: post
title: "iamthefold: The Data"
date: 2015-2-8 14:42
category: webdev
tags: webdev

---

The exposure to a tiny project I built over a hungover weekend has been amazing, humbling, and frankly scary at times. The response to the site has been nothing short of awesome, and it’s been great to see so much discussion about The Dreaded Fold in 2015.

I was originally just going to let the data speak for itself—leaving the site as the only view — but since it’s now there is so much data, it would be a shame to not take the opportunity to produce some more in-depth results.

In maybe a week or so I’ll publish a far-lengthier post all about why and how I built the project, including all the mistakes I made and how it’s changed my perspective for future projects. If you think that might interest you, I suggest you [follow me on twitter](https://twitter.com/_iest) for updates. For this post though, I’m just going to present the data and some conclusions we can draw from it.

# Disclaimer

Although I will go into averages, uniques and some other numbers that might seem like things to design around, here’s some sage advice:  _do not_ design with a specific device or viewport size in mind, and remember the best thing about the web is it’s inclusiveness.

# On the accuracy of the data

The values were obtained by grabbing the visitor's `window.innerHeight` (the browser's viewport height, excluding toolbars, window chrome etc). This does not take into account the zoom of the browser or any other extraneous variables. Each fold value (the line drawn) was recorded once per visitor[^2]. 

### The basics

The data shown was collected between Monday 9th Feb at 12:22[^1] and Sunday 15th Feb 14:15.

<noscript>Javascript is required to pull down the data and render the graphs, sorry!</noscript>

- Total folds recorded: **<code id="total">calculating...</code>**
- Total unique folds: **<code id="unique">calculating...</code>**
- Mean: **<code id="mean">calculating...</code>**
- Median: **<code id="median">calculating...</code>**
- Standard deviation: **<code id="deviation">calculating...</code>**

### All unique values

<div class="histogram-all graph"></div>

As you can see there's a good spread of values across the board. There are a few values above ~`2000` that only crop up once or twice (with the max value being `5120`!).

### Values that appear more than 3 times

<div class="histogram-3 graph"></div>

### Values that appear more than 300 times

<div class="histogram-300 graph"></div>



[^1]: Although the site launched on the day before, there was some abuse of the endpoint which meant I had to scrub the data.
[^2]: I’ll go into detail how I enforced that in the follow-up technical post.

<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="/scripts/iamthefold-scripts.js" charset="utf-8"></script>
