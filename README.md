bulletproof-js-workshop
=======================

Instructions, files and helpful bits

#Bulletproof JavaScript#

Starting with the Angular example from [TodoMVC](http://todomvc.com), we'll walk through a set of tools that make developing JavaScript applications almost enjoyable.

##Conference Blurb##
Take a look at your codebase. Go ahead, this abstract will wait. Notice anything? Perhaps a few more lines of JavaScript than years past? JavaScript is no longer an outlier, a language for the interns, something we can just mash together. Today, JavaScript is a first class citizen. As such, we need to treat it will all the care and feeding we extend our server side languages. This talk will introduce you to a set of tools that will help you write bulletproof JavaScript.

Step one, make sure we aren't making any basic mistakes like using == when we really mean ===. To remedy these types of bugs, we'll leverage JSHint to statically analyze our code. In addition to walking through the setup, we'll discuss how to ratchet up the rules as you improve your codebase. Just like Java or C#, we also need to test our JavaScript code. We'll introduce Jasmine, a BDD style testing tool as well as other tools that make help in the testing process. Last but not least, we'll take a tour of Plato, a JavaScript source code visualizer. Taken together, these tools can go a long way to improve your JavaScript code.

##Prerequisites##
Attendees are expected to have a laptop (or be very good at quickly making friends with someone that has one). On said laptop, you should have at least one (ideally multiple) modern browser:

* [Safari](http://www.apple.com/safari/)
* [Chrome](https://www.google.com/intl/en/chrome/browser/)
* [Firefox](http://www.mozilla.org/en-US/firefox/new/)
* [Opera](http://www.opera.com)

In addition, you should have a text editor though you can certainly use an IDE if you wish but nothing will require that. Before the class, please clone this repository as well as [bulletproof-js](https://github.com/ntschutta/bulletproof-js) to some location on your hard drive.

Lastly, please install [git](http://git-scm.com) on your machine ([downloads here](http://git-scm.com/downloads)). This repo consists of a set of branches; being able to move from one branch to another may be very helpful should you get lost, fall behind or just have one of those days.

##Warning - Command Line Ahead!##
Much of the work we will do in this workshop will center around the command line. If you aren't comfortable typing commands in to a prompt, you may wish to attend a different session, make a friend, or just follow along with the rest of the class. If you are on a Windows machine, you may want to use [Console2](http://www.hanselman.com/blog/Console2ABetterWindowsCommandPrompt.aspx) (download [here](http://sourceforge.net/projects/console/files/)), [PowerShell](http://technet.microsoft.com/en-us/library/hh847837.aspx) or [Cygwin](http://www.cygwin.com).

##What We'll Cover##
The Goal is simple: show you what we can do to make our JavaScript code better. To this end, we'll focus on:
* Jasmine
* Karma
* Phantom
* Istanbul
* JSHint
* Plato

##What We Won't Delve Into##
This sessions is *not* intended as a deep dive on any of these tools. You won't walk out an expert on Jasmine or Karma, but you will know how to install them! Other things we won't delve into:
* Building applications on Node
* _How_ to test JavaScript
* Mocking/stubbing etc JavaScript
* Testing ajax calls
* Integration testing of JavaScript MVwhatever apps
* Evaluate specific JavaScript MVwhatever frameworks

#Your Guide#
For those that are curious about *me*, here's my bio:

Nathaniel T. Schutta is a software architect focussed on mobile and making usable applications. A proponent of polyglot programming, Nate has written two books on Ajax and speaks regularly at various worldwide conferences, No Fluff Just Stuff symposia, universities, and Java user groups. In addition to his day job, Nate is an adjunct professor at the University of Minnesota where he teaches students to embrace dynamic languages. Nate is also doing everything he can to rid the world of bad presentations, he helped write a book on [Presentations Patterns](http://presentationpatterns.com).

You can follow me on Twitter: [@ntschutta](https://twitter.com/ntschutta)

You can read my mostly dead [blog:](http://www.ntschutta.com/jat/) or check out my [eventual reboot:](http://ntschutta.github.com)
