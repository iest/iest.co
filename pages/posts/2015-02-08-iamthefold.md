---
title: "iamthefold: How it’s made"
date: 2015-2-8 14:42
category: webdev
tags: webdev

---

Whilst reading my twitter feed on a Saturday morning in bed (and hungover following an anguishing defeat of the Welsh rugby team the previous night), Jordan Moore [tweeted](https://twitter.com/jordanmoore/status/563980959901843456) about an idea he had for a simple web app.

The idea revolves around something I’ve always been passionate about: [The Fold](https://en.wikipedia.org/wiki/Above_the_fold) in web design, and how it’s often a point of contention when building websites.

I fancied a weekend project — so after spending an afternoon and evening on it here’s what it looked like:

![IamTheFold](/images/fold/iamthefold.png)

<!--Data collection began on Sunday 8th Feb around 14:49. A surprisingly short amount of time later, multiple unscrupulous individuals figured out how to exploit the [very simple]() POST-accepting API I wrote: sending every number between 0 and 100k, sending 1337 or derivatives, negative values, and so on. Shortly after this I implemented IP blacklisting (so a single IP could only send a single fold value) and scrubbed the unscrupulous data. At the time it was pretty stressful to see your little baby project getting ruined before your eyes. Unbeknownst to me, I implemented the feature wrong and was blacklisting every single IP that was posting to the API.-->
