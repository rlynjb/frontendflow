# FrontEnd Flow
### Base Theme

A bare-bone Front-End Workflow theme with all tested goodies.
Includes the tools, assets, sources you need to get started with protoyping your app or website.
I created this theme to accomodate my Front-End workflow. Feel free to use it as well. I am just sharing my workflow here.

### My Goal

My goal is to create a Front-End Workflow that accomodates various templating engines for both Apps and CMS.

-----

**Contents**

- [Included Features and Tools](#included-features-and-tools)
  * Application Tools - Framework
  * Animation
  * Icons
  * DOM Framework
  * Development Aid
- [Directory Structure and Files explained](#directory-structure-and-files-explained)
  * Front-End assets
  * Grav Templating
  * Stand-alone Templating
  * Magento 2 Layout and Templating
  * Wordpress Templating
- [Installation](#installation)
- [Updates](#updates)
  * Grav core updates
- [Resources](#resources)
  * NPM
  * Bower

-----

# Included Features and Tools

## Application Tools - Framework

- Zurb Foundation
  * Doc: [http://foundation.zurb.com/sites/docs/](http://foundation.zurb.com/sites/docs/)
  * Includes SASS and Javascript components install
  * For a list of all components: [http://foundation.zurb.com/sites/docs/kitchen-sink.html](http://foundation.zurb.com/sites/docs/kitchen-sink.html)
  * Uses `css/foundation-includes.scss` to neat-pick SASS components
  * Uses `css/foundation-settings.scss` to customize global design
  * Uses `gulpfile.js > var jsScripts > Zurb Foundation stuff` to neat-pick JS components 

## Animation

- SmoothState.js
  * Implements CSS3 transitions/animations between page loads by hooking into element using class
  * Vanilla JS
  * Doc: [https://github.com/miguel-perez/smoothState.js](https://github.com/miguel-perez/smoothState.js)
  * Getting Started Basic Tutorial: [https://css-tricks.com/add-page-transitions-css-smoothstate-js/](https://css-tricks.com/add-page-transitions-css-smoothstate-js/)
  * To include or exclude in build process (uncomment or comment the ff line of code):
    * `gulpfile.js > var jsScripts > Animation`
- Skrollr
  * Implements parallax by defining CSS3 animations and page scroll positions as element attribute
  * Requires jQuery
  * Doc: [https://github.com/Prinzhorn/skrollr](https://github.com/Prinzhorn/skrollr)
  * To include or exclude in build process (uncomment or comment the ff line of code):
    * `gulpfile.js > var jsScripts > Animation`
- Smooth Scroll
  * Implements scroll animation on anchor tags
  * Vanilla JS
  * Doc: [https://github.com/cferdinandi/smooth-scroll](https://github.com/cferdinandi/smooth-scroll)
  * To include or exclude in build process (uncomment or comment the ff line of code):
    * `gulpfile.js > var jsScripts > Animation`

## Icons

- Fontawesome
  * Doc: [http://fontawesome.io/icons/](http://fontawesome.io/icons/)
  * To include or exclude in build process (uncomment or comment the ff line of code):
    * `gulpfile.js > var fontIcons`
    * `gulpfile.js > var sassFiles`
    * `gulpfile.js > var sassSource`

## DOM Framework

For DOM manipulation, I've included 2 modes, **React.js mode** or **jQuery mode**.
Reason for 2 DOM Framework is that sometimes, I needed something quick and I would use plain jQuery for simple websites.
But for UI development, I would highly recommended React.js for its performance and elegant writing of code.

- React.js
  * Official Doc: [https://facebook.github.io/react/](https://facebook.github.io/react/)
  * Learning Raw React.js [Learn Raw React — no JSX, no Flux, no ES6, no Webpack](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)
  * More about React.js [The React.js Way: Getting Started Tutorial](https://blog.risingstack.com/the-react-way-getting-started-tutorial/)
  * Getting Started Basic Tutorials and more [Build with React](http://buildwithreact.com/)
  * Uses **JSX** as syntax aid when writing HTML markups on Javascript `*.jsx` files
  * To include or exclude in build process (uncomment or comment the ff line of code):
    * `gulpfile.js > var jsScripts > DOM`
  * You would use `js/app.jsx` to write your code for React.js
- jQuery
  * Everybody knows jQuery :-p but here's a link [https://jquery.com/](https://jquery.com/)
  * To include or exclude in build process (uncomment or comment the ff line of code):
    * `gulpfile.js > var jsScripts > DOM`
  * You would use `js/custom.js` to write your code for jQuery

## Development Aid

- Gulp.js
  * Builds included SASS and JS files
  * Dist files are: `css/styles.css`, `js/scripts.js`, `js/app.js`
- Bower and NPM
  * Installs all dependencies

-----

# Directory Structure and Files explained

## Front-End assets

- `bower.json`
  * Contains a list of 3rd-party CSS and JS plugins/frameworks. Run `bower install` to install download a copy of these plugins. Sass is strongly utilized for awesome customization regarding performance and built of css and js files.
- `package.json`
  * Holds the tools we need to run in order to create awesome front end experience.
- `gulpfile.js`
  * This holds how our Sass and JS files are built and deliver.

### css/

Contains a copy of **Zurb Foundation's** settings.scss file named `foundation-settings.scss` and a main scss file (`foundation-includes.scss`) that handles which component to include in build process.

- `custom.scss` contains custom styles that will also override any styles from 3rd-party css styles. You can also use import or include to break your styles further and use `custom.scss` as a main file to arrange your styles. Refer to `gulpfile.js` to configure settings.

- `styles.css` is generated from gulp.js. This contains Foundation styles, other 3rd-party scss files, and `custom.scss` file. To include new SCSS file or rearrange SCSS files in certain sequence, refer to `gulpfile.js`.

- `override-styles.css` file is considered a stylesheet for quick overrides done by designers and it does not require a Sass setup. This will contain minimal tweaks of structure, typography, skin.

### js/

- `custom.js` file contains your Javascript and jQuery code. This file is added at the very bottom of `scripts.js` file after Zurb Foundation javascript components and other 3rd party javascript files. Check `gulpfile.js` file for which JS file to include on build and to reorder files.


## Grav Templating

- `blueprints.yaml`, `gravtheme-frontendflow.php`, `gravtheme-frontendflow.yaml`
  * These files are what registers your theme to Grav's engine core. Refer to this link for more info: [Grav Theming Tutorial](https://learn.getgrav.org/themes/theme-tutorial)
- `templates/`
  * Contains a basic setup of Grav Theme, partials directory and a default.html.twig template. You'll notice after you have laid out your Design comps and implemented any CSS transitions/animations, you'll soon dig further into Grav Theming. For tutorial on Grav Theming, refer to this link: [Grav Theming Tutorial](https://learn.getgrav.org/themes/theme-tutorial).
  * This directory will later follow Grav's theming convention base on Grav's Page content hierarchy rules. Refer to Grav's Pages Documentation for more info: [Grav Content Pages](https://learn.getgrav.org/content/content-pages).


## Stand-alone Templating

- `index.html`
  * This file is a barebone HTML file. It links to `images/`, `css/`, `js/` files.

## Magento 2 Layout and Templating

For Notes and instructions on how templating works on Magento 2 and how to get starting, visit my blog :-D [Wandrr.io - Getting started with Magento Theming](http://wandrr.io/Getting-started-with-Magento-Theming)

Its best to use Magento 2 Blank theme to avoid re-coding templates, javascripts, and other security issues that maybe involve in a Magento theme.

- `composer.json`, `registration.php`, `theme.xml`
  * Files that registers your theme to Magento 2 core engine
- `web/`
  * Compiled Stylesheets, Javascripts, Fonts from Front-End assets are dump unto this folder following Magento 2's theme directory structure.
- `etc/`
  * Contains an XML file that defines various image sizes used throughout the site
- `media/`
  * Contains images
- `Magento_Theme`
  * A Magento 2 module that we are extending and overriding to start theming the general components of a Magento website

## Wordpress Templating

To get started: [Anatomy of Wordpress Theme](https://codex.wordpress.org/Theme_Development#Anatomy_of_a_Theme)

- `style.css`
  * Required file. This file registers your theme to Wordpress core.
  * Its better to copy a `style.css` file from another theme and replace data. This file is sensitive and involves file saving utf format and key values.
- [Wordpress basic template files](https://codex.wordpress.org/Stepping_Into_Templates)
  * Getting started with templating
- `functions.php`
  * Optional. Usually use to override functions from a parent theme or Wordpress core.

-----

# Installation

**Requirements:**

- Node
- NPM or NVM if you deal with multiple node versions
- and your CMS of choice

**Getting starting:**

- `git clone` this repo in your root directory
- `cp frontendflow/* <your/theme/path/>` - copy over CMS theme registration files
- `cp -R frontendflow/* <your/theme/path/>` - copy over CMS templating files
- `cp -R frontendflow/* <your/theme/path/>` - copy over Front-End assets
- inside of `<your/theme/path/>` directory, run:
  * `npm install -g`
    * required to run Bower and Gulp
  * `bower install`
    * installs 3rd-party plugins used on this theme
  * `gulp && gulp watch`
    * builds our SASS and JS files

-----

# Resources

## npmjs.com - package.json

To add npm modules, check out http://npmjs.com

Run: `npm install module-name --save-dev`

This theme only uses Bower and Gulp modules for build process.

## bower.io - bower.json

To add plugins, check out http://bower.io and http://javascripting.com for reference.

To install from bower.io
Run: `bower install --save plugin-name`

To install from github
Run: `bower install --save github-url`

To install from github and specify a version
Run: `bower install --save github-url#1.0.0`

## After installing a plugin from Bower

After installing a plugin from bower, make sure to update `gulpfile.js` so it will included on the build. Restart `gulp && gulp watch` as well.
