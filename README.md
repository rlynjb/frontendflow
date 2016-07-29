# Grav Theme - Front-End Flow starter kit

This contains a basic Grav theme setup with Front-End Workflow tools.

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
  * Doc: [https://github.com/miguel-perez/smoothState.js](https://github.com/miguel-perez/smoothState.js)
  * Getting Started Basic Tutorial: [https://css-tricks.com/add-page-transitions-css-smoothstate-js/](https://css-tricks.com/add-page-transitions-css-smoothstate-js/)
  * To include or exclude in build process (uncomment or comment the ff line of code):
    * `gulpfile.js > var jsScripts > Animation`
- Skrollr
  * Doc: [https://github.com/Prinzhorn/skrollr](https://github.com/Prinzhorn/skrollr)
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

-----

# Installation

**Requirements:**

- Node
- NPM or NVM if you deal with multiple node versions
- A Grav install, duh :-p

**Getting starting:**

- `git clone` this repo in your root directory
- `cp -R gravtheme-frontendflow/* grav-install/user/themes/your-theme-name/`
- inside of `/user/themes/your-theme-name/` directory, run:
  * `npm install -g`
    * required to run Bower and Gulp
  * `bower install`
    * installs 3rd-party plugins used on this theme
  * `gulp && gulp watch`
    * builds our sass files. We've carefully chose each Foundation components to avoid CSS bloats and overriding of styles.

-----

# Updates

## Grav core updates

http://getgrav.org

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
