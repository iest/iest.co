---
title: "iamthefold: The Data"
date: 2015-2-15 14:42
category: webdev
tags: webdev

---

The exposure to a tiny project I built over a hungover[^1] weekend has been amazing, humbling, and frankly scary at times. The response to the site has been nothing short of awesome, and it’s been great to see so much discussion about The Dreaded Fold in 2015.

I was originally just going to let the data speak for itself — leaving the site as the only view — but since there is now so much data, it would be a shame to not take the opportunity to produce some more in-depth results.

In maybe a week or so I’ll publish a far-lengthier post all about why and how I built the project, including all the mistakes I made and how it’s changed my perspective for future projects. If you think that might interest you, I suggest you [follow me on twitter](https://twitter.com/_iest) for updates. For this post though, I’m just going to present the data and some conclusions we can draw from it.

# Disclaimer

Although I will go into averages, uniques and some other numbers that might seem like things to design around, here’s some sage advice:  _do not_ design with a specific device or viewport size in mind, and remember the best thing about the web is it’s inclusiveness.

# On the accuracy of the data

The values were obtained by grabbing the visitor's `window.innerHeight` (the browser's viewport height, excluding toolbars, window chrome etc). This does not take into account the zoom of the browser or any other extraneous variables. Each fold value (the line drawn) was recorded once per visitor[^2].

### The basics

The data shown was collected between Monday 9th Feb at 12:22[^3] and Sunday 15th Feb 14:15.

<noscript><h1 style="color: red;font-size: 2em">Javascript is required to pull down the data and render the graphs, sorry!</h1></noscript>

- Total folds recorded: **<code id="total">calculating...</code>**
- Total unique folds: **<code id="unique">calculating...</code>**
- Mean: **<code id="mean">calculating...</code>**
- Median: **<code id="median">calculating...</code>**
- Standard deviation: **<code id="deviation">calculating...</code>**

### Unique values against total count

<div class="histogram-all graph"></div>

As you can see there's a good spread of values across the board. There are a few values above ~`2000` (invisible on the graph) that only crop up once or twice, with the max value being `5120`.

### Values that appear more than 3 times

<div class="histogram-3 graph"></div>

Removing values that appear fewer than 3 times, you can see a clearer picture on where the most common fold values lie. As you can see, there is no obvious distribution here, but there are a few lines that occur more frequently than others.

### Values that appear more than 300 times

<div class="histogram-300 graph"></div>

I imagine the most common values must map to some specific devices. From some quick personal testing:

- `667`: Twitter app on iPhone 6
- `801`: Chrome on 13” Macbook Pro with window extended from top to bottom

The best thing about this graph is that even when cutting down the values to show only the most common folds, there’s still a huge disparity between the largest and smallest.

# Conclusion

“The Fold” is, and has always been, _a thing_ on the web. Content above the fold constitutes the first thing a visitor views on your website, so of course it’s important! If you're creating web pages these days, you'd be crazy not to take it into account.

However, this experiment has made it abundantly clear that there is no _single_ fold (not that we in the web-design community were under any illusions that it was any other way). I hope more than anything that this tool can be used to educate those who aren’t aware of this fact, and help to show how fluid, disparate, and messy the web really is.

# Wrap-up

The data used for this post is available [here](/scripts/folds.txt). Feel free to do what you want with it (but if you build something cool with it, let me know!).

I’ll be updating it from time-to-time with data from [iamthefold](http://iamthefold.com).

Issues viewing this post? Questions comments? Hit me up on [twitter](https://twitter.com/_iest) or open a PR [on github](https://github.com/iest/iest.co)


[^1]: The morning after the first match of the 2015 Rugby Six Nations: Wales vs. England
[^2]: I’ll go into detail how I enforced that in a follow-up technical post.
[^3]: Although the site launched on the day before, there was some abuse of the endpoint which meant I had to scrub the data.

<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="/scripts/iamthefold-scripts.js" charset="utf-8"></script>
