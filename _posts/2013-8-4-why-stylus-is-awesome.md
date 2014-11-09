---
layout: post
title:  "Why Stylus is my favourite CSS preprocessor"
date:   2013-8-4 15:00:00
categories: webdev css
---

## The first CSS preprocessor I used was [Less](http://lesscss.org). It was drier than [sass](http://sass-lang.com), and once they had in-line `@media` query support, I didn't think  it could get much better.

Then I found [stylus](http://learnboost.github.com/stylus/). Imagine all the best bits out of less & sass (mixins, variables,  colour manipulation), but now with a touch of javascript (functions, conditionals, interpolation, iteration…). What you have is an incredibly flexible language to write better, cleaner outputted CSS, and be able to write it faster.

Another awesome thing about stylus is that because it's indentation based, it doesn't care if you use colons and semi colons. In a recent project I wrote every line as dry as possible, i.e.

```stylus
.header__nav
    position relative
    float right
    overflow hidden
```

### Vendor prefixes

One of the biggest pain points of writing CSS is getting the vendor prefixes right. Even though we just recently [lost a rendering engine](http://my.opera.com/ODIN/blog/300-million-users-and-move-to-webkit), if you want any hope of browser backwards-compatibility, you gotta have prefixes. Here's a stylus function to output vendor prefixes easily:

```stylus
vendors = o, moz, webkit, official
vendor(property, value)
  for vendor in vendors
    if vendor == official
      {property} value
    else
      -{vendor}- {property} value
```

Now, in more detail...

```stylus
vendors = o, moz, webkit, official
```

Here I'm defining `vendors` as an array, with all the vendors in it.

```stylus
vendor(property, value)
```

Here we're just defining a function called `vendor`, and we're passing it the property we want to vendor-ify, `property`, and the value we want it set to, `value`.

```stylus
for vendor in vendors
```

`vendors` is the above array. This line iterates through the vendors.

```stylus
 if vendor == official
      {property} value
```

Inside the `for` loop, check if the vendor is *official*, if it is, we don't want any browser prefixes, so we just want the `property` and `value`.

```stylus
else
    -{vendor}- {property} value
```

If the vendor we get is not official, add dashes each side of the `vendor` variable, then the `property` and `value`.

Now, if we want some vendor prefixes, we can simply call:

```stylus
vendor(border-radius, 4px)
```

Outputting:

```css
-o-border-radius: 4px;
-moz-border-radius: 4px;
-ms-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
```

Pretty sweet.

### Transparent mixins

Transparent mixins allow you to *redefine a CSS property as a function*. 

Read that last bit again.

Now let me show you a real-world example.

`border-radius` is one of the properties we typically want to add vendor prefixes to. What we can do is redefine it to use our `vendor` function from earlier...

```stylus
border-radius()
    vendor(border-radius, arguments)

// Use `arguments` like you can in javascript to get the arguments given to the function.
```

Then whenever you want to use border radius in your stylesheet, it's pretty simple:

```stylus
border-radius: 5px
```

Just like using the specc'd syntax.

This outputs:

```stylus
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
-o-border-radius: 5px;
-ms-border-radius: 5px;
border-radius: 5px;
```

Just like you'd expect!

### Convinced yet?

You should be!

Just imagine the possibilities of transparent mixins. You can check if a `background-color` or `colour` you've set has an alpha channel, and if it does, output a solid-colour fallback for older browsers:

```stylus
background-color()
    if arguments == transparent
       background-color transparent
    else if alpha(arguments) != 1
        background-color rgb(arguments)
        background-color rgba(arguments)  
    else
        background-color arguments
```
```stylus
color()
    if arguments == transparent
       color transparent
    else if alpha(arguments) != 1
        color rgb(arguments)
        color rgba(arguments)
    else
        color arguments
```

Easily perform transforms and transitions with full vendor-prefix action:

```stylus
transform()
  vendor(transform, arguments)

transition(what = all, duration = 200ms, timing = ease)
    vendor(transition, what duration ease)
```

Seriously, go and [give stylus a try online](http://learnboost.github.com/stylus/try.html).

This artcile been useful? Reasonable? Crap? Let me know what you think of this article [on twitter](https://twitter.com/iestynw).