# IDEAS
- could write this in layman terms a là https://the-pastry-box-project.net/brad-frost/2014-january-28
- original link: http://www.jordanm.co.uk/post/110325451951/i-am-the-fold

# Building i-am-the-fold in an afternoon

Jordan Moore had an [excellent idea](http://www.jordanm.co.uk/post/110325451951/i-am-the-fold) for a web app to destroy the fallacy of what the “fold” is in 2015 web design.

Me from 2012 would have loved to read an article on every explicit detail that went into building it. This is that post.
**
## Setting up
First thing is to create an app on heroku. {MORE DETAIL}
Then I set up a [git](http://git-scm.com) repo on my machine, and used the heroku [command line interface](https://devcenter.heroku.com/articles/heroku-command) to add heroku to the list of remotes, so I can easily push my code there.

I’m handy with JavaScript, so I’m gonna use [iojs](https://iojs.org) to write the server-side application (it’s a recent fork of nodejs, and is better in every way). _Sidenote: I’ll be using node/iojs interchangeably throughout this post_.

I’ve got `npm` already installed (a package manager for node/iojs modules), and because I’ll be using a load of npm packages, I need to `npm init` to create a `package.json` file, so I can keep track of all my dependancies. Once that’s done, I’ll start installing modules that I’ll need.

First up is express. It’s an easy-to-use web framework for node that makes a lot of things trivial. Once that is installed we can get a basic webpage up an running {STEP 1 commit}. I’ll use nodemon to develop the app for a fast feedback loop.

Now I’m starting to think about what I want the app to look like and how it’ll work. I envision a basic white page with very little text, with a series of horizontal lines that have a slight transparency.

So each time a user loads the page, I’ll run a little javascript that’ll send the current users “fold” position back to the server. Then the next time somebody loads the page, the server will render where that line is. So:

- User hits page. Client-side JS grabs fold position (`window.innerHeight`), sends it back to server.
- Server saves the position in a basic DB of some kind
- Next user hits page. Server pulls out all saved positions, puts them into an array into the jade file, which renders them out. User sees a bunch of horizontal lines.

A warning though: all the code is written imperatively. The code  is not meant to be production quality, it’s just a quick hack.

Turns out I have never really used the browser-native APIs for performing POST requests to a server, and the documentation on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) is horrifying. Thankfully after a quick search on stackoverflow, I’ve figured out how to send a tiny POST back to the server, containing the fold position. Add a few styles, and we now have lines drawing across the screen! {STEP WHATEVER}

Deploying to heroku is as simple doing a pushing to a git repo. It’ll automatically run an iojs process for us, and all we need to do is hit https://i-am-the-fold.herokuapp.com !

Now we have the basic premise working, we need to add some style, and make it a bit more hardy. In his original post, Jordan talked about the possibility of tweeting a user’s screen height with a link to the app. Before we get there, we should probably make the page a bit prettier. Perhaps show the pixel value next to the line. Maybe we could add a splash of colour as well. Maybe it shouldn’t show a bunch of lines, but instead a bunch of coloured, slightly transparent boxes on top of each other? Time to fire up Sketch and play around with some ideas…

After playing around, the box idea could look really cool. However, the point of this tool is to prove that The Fold does not exist. By layering coloured rectangles on top of one another, we’ll end up with a giant coloured box at the top, with a gradual gradient fading down as we move to the less-common screen heights. This kinda defies the point, as instead of showing all the differences between the viewports, we’ll be showing what they all have in common. The only other way to show this data is with lines, so that’s the route I’ll go down.

Showing the viewport height pixel value is also a problem. If there are multiple viewports of similar heights next to each other, and the pixel values aren’t dynamically positioned, the values will overlap and become unreadable. The only real way to solve this would be to have some kind of dynamic positioning or colouring of the values, so you could read them. Or, just not care that you can’t read every single one.

Ok, now we’ve added a bit more style, let’s do a bit of cleanup.  Lets install underscore so we can use it’s `unique` and `max` utility methods. That way, we won’t render duplicated values. Also, because we’re absolutely positioning the horizontal lines, we need to get the tallest height out, so we can set the width of our container element.

At the moment we’re storing all the fold heights in an array on the server, in memory. As soon as the server dies (which will typically happen after an hour of inactivity on heroku), we’ll lose all our data — which we certainly don’t want!
In real-life projects (not hacks) you’d typically use a database to store this stuff (like redis or mongo or whatever), but seeing as this is such a simple app, we’ll just write out to a text file on the server. We’ll read the file on startup to pull in the previous fold values, then write out to it when we get any new values posted in.

We’ll assume the contents of the text file will just be a bunch of numbers, separated by newlines. So, when we read the file in, we’ll split it on newlines, parse the string numbers to integers, then filter out anything that’s not a number. Happy days. Also, we’ll limit the length of the array to 200, just so we don’t render too many lines on the client.

Although it wouldn’t be much of an issue, the endpoint that our client is posting to (`/fold`) is not secured, so literally anyone on the internet could POST a fold size to the server. Although we could just cross our fingers and hope nobody on the internet does that, in reality there are a lot of douchebags out there, so a sprinkling of security could help thwart would-be nice-thing-ruiners.
It can’t be too hard to make sure that the POST we send from the rendered page is the only one we’ll accept on the server.

I spent a long time thinking about how people could abuse the site. If they knew that a simple refresh would draw their fold on the page, perhaps they would resize and refresh constantly? But in reality, I doubt anyone visiting the site would care that much to do that. And even if they did, they would only solidify the point that people have very different viewports.

I also worried about some random internet citizens abusing the `/fold` endpoint. Again, I doubt anyone could be bothered. And the worst they could do would be to send a gigantic, fake number. Something easy to fix anyway: we’ll not do anything with the POST contents if the fold value is not a number, or is greater than 1M (a frankly inconceivable viewport height). 

## Sudden panic

I’ve suddenly realised that the “write to disk” idea I had won’t work on heroku, as you can’t modify files. I just posted the link live on twitter, and Jordan just posted it to his 3K followers as well.
Also, as soon as the dyno on heroku gets cycled, I’ll lose all the fold data from the site.

Humph.

Ok. I can either setup the app on heroku with a database, or I could just host the application on my own server where I know it’ll run as I meant it to.
The difficulty is to pull out the data from the currently running process so that I can put it back when I move over to the new host. The problem is I can’t actually access the innards of that node process. However, I know that the web page itself will randomly render 200 out of all the values it has in memory. So, it’s type for copy-paste-fun-time with the chrome inspector, and some editing with Sublime… 
Ok, so I’ve not pulled out all the unique folds from chrome. Shame I couldn’t access the real numbers (rather than just the uniques) but whatever. Next thing is to get the project up and running on my Linode server (where this site, and others, is hosted).

First thing is to commit the new changes to git. Then, copy the whole thing up to the server. I’ll use Transmit for this as using rsync in a terminal always worries me.
As I wait for that to upload (node_modules is massive), I’ll setup nginx on the server in preparation for running the node process. My knowledge of nginx is limited, but I know I can use a `proxy_pass` thing to forward requests to the running node process. Like this:

```nginx
server {
	server_name iamthefold.com www.iamthefold.com;

	location / {
                proxy_pass http://localhost:3333;
        }
}
```

This tells nginx to proxy all requests to `iamthefold.com` and `www.iamthefold.com` to the node server that will be running locally on `localhost:3333`. The smart way to use nginx is with two folders: `sites-available` and `sites-enabled`.

TODO:
[x] Limit folds to 1 request per IP
[x] Clean out duplicate/false folds
[x] Move to WOPR

Who knew this would be so stressful! Had some clown abuse the `/post` endpoint, so I’ve learnt my lesson there. On each request sent to it, I now grab the IP and add it to a blacklist. Any more requests from the IP are 401’d. I’ve also got it up and running on my Linode (after floundering around for ages trying to figure out how to install iojs). I’ve swapped the name servers over on hover (my domain registrar) and now I’m just waiting for the thing to propagate…

Waiting for the DNS to propagate felt like a age! It’s finally getting through everywhere now. Feel like a bit of an idiot!

OK — seems like it’s working well for most people — just not me on my TalkTalk connection…

One thing that worried me at one point was that the number of “folds” not the page was not increasing. But after thinking about it, how many unique viewport heights are there in common usage? Just checking now, and I have 391 unique heights. I would assume most of the people who’ve looked at the site by now are web-designer types. They’ll have MacBooks, iPads, iPhones, Nexus devices. They will have looked with various different browsers, inside different environments (twitter clients etc.) I don’t imagine the list will grow to include many more. But it does give you food for thought.

Next day: the iojs process exited at some point during the night… Which is unnerving. I’ve set up an alert with pingdom so I’ll know when it’s down, and I’ll now user `forever-monitor` to restart the iojs process if it exits for whatever reason.

While on the overground and connected to my Linod via a dodgy 4G tethered connection, I got it all up and running smoothly. I’m now logging the blacklisted IPs, and logging any more successful folds. I’m beginning to wonder if the IP restriction was a bad idea… It means that any number of computers behind a single IP (e.g. agency, companies, etc.) will only have the chance to save a single fold height. I 100% need the security on the fold endpoint though, and I’m not sure how else to combat that. Regardless, I think the point is made for what the original purpose was.

Just added some changes so I’m now using a CSRF token to make sure I only accept posts from the actual client page.

Even with CSRF and IP blacklisting, I’m still getting the odd abuse here and there.

Got a random tweet from someone for a small bug fix. That was weird.

Now using async.cargo to batch-write to disk. Means I should have far less CPU usage and fewer to no crashes… Fingers crossed!

# Post ideas

- Write a full-on technical post. Details of how I went about building it from scratch, to the horrible mess it is now that I really wish was a bit cleaner. Details of every mistake I made, every failure…
- Write a full breakdown of the numbers. Total. Uniques. Vertical histogram. Canvas rendering one line per px, whose width is the number of visitors at said width.

Would be really cool to render a random sampling of the data… I’ve implemented it using client-side code, so there’s not much required by jade to re-render the template (just swapping out a single array rather than swapping out thousands of li’s).

Had a fantastic PR from the excellent Forbes Lindsay yesterday, with some major improvements to the site. Static assets are now properly that — static, and theres a “proof of work” hashcache implementation that took me a little while to get my head around.

# Timeline
- Release: Sunday at 14:49
- Moved from Heroku to my Linode: Sunday ~16:30
- Added IP blacklisting: Sunday 18:07
- Fixed blacklist bug that mean no new folds were being saved: Monday 12:22
- Added CSRF to reduce abuse: Monday 16:22
- Make IP blacklist save and load: Monday 16:28
- Changed rendering to be 1000-node sample, render on client to save some server CPU time: Monday: 23:46
- Add hashcache from @ForbesLindsay to minimise abuse: Wednesday 9:26

Only just discovered there are issues rendering the site in IE9 Weds at ~5pm. Out of 23k hits and 150 new twitter followers, I hadn’t heard a peep about it! Just shows the audience I was probably getting.