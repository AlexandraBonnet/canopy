Canopy
======

Sometimes the hardest part of a new project is getting started. Canopy gives you a solid base with a range of tools to help you along development process.

<h2>Set up Canopy</h2>

Canopy is based to SMACSS and relies on NodeJS, NPM, Grunt, Bower & Compass, once you’ve got these on your machine, you’ll have everything you need to start using Canopy in your projects.

<h3>Install these one time dependencies</h3>

There are two tools sets you need to install on your machine before you can build sites with Canopy: NodeJS, NPM & Compass.

<h4>NodeJS & NPM</h4>

Canopy’s build tools need Node and NPM. Node is used to run Grunt, the task runner. NPM is used to download the modules needed to perform certain tasks in Grunt. Moreover, Node is used too to run Bower, a package manager.

If you aren’t sure if you have NodeJS and NPM, check by opening a command prompt and running:

<pre>$ node -v</pre>

If Node responds, check the version matches the current version on NodeJS.org.<br>
If you don’t get a response or have an old version then go to NodeJS.org and click on the big green Install button. NPM will be installed with NodeJS automatically.

Else if you have Mac OS, you can use the command prompt:

<pre>$ brew install node</pre>

<h4>Compass</h4>

Compass runs on any computer that has <a href="https://www.ruby-lang.org/en/downloads/">ruby installed</a>.<br>
If you aren’t sure if you have ruby, check by opening a command prompt and running:

<pre>$ ruby -v</pre>

After that, you can use the command prompt to install Compass:

<pre>$ gem install compass</pre>

<h3>Set up your web starter kit project</h3>

The first step is to go to Github, and download and extract the zip. This will be basis for your project so rename the folder and put it somewhere relevant on your machine. For the rest of this guide we’ll call the folder my-project.

<h4>Install the local dependencies</h4>

Next, you need to install the local dependencies for Canopy. Open a command prompt, change directory into your project folder and run the following npm install scripts.

<pre>$ npm install -g grunt-cli</pre>
<pre>$ npm install -g bower</pre>

and finally:

<pre>$ grunt</pre>

<h3>Further references</h3>

Next sections of this guide covers how to use SMACSS, Grunt, Bower, Compass:
- https://smacss.com/
- http://gruntjs.com/
- http://bower.io/
- http://compass-style.org/
