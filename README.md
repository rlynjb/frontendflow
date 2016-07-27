# Grav Theme - Front-End Flow starter kit

This contains a basic Grav theme setup with Front-End Workflow tools.

**Contents**

- Directory Structure and Files explained
- Installation
- Updates
  * Grav core updates
- Plugin resources
  * NPM
  * Bower

-----

# Directory Structure and Files explained

### css/

Contains a copy of **Zurb Foundation's** settings.scss file named `foundation-settings.scss` and a main scss file (`foundation-includes.scss`) that handles which component to include in build process.

`custom.scss` contains custom styles that will also override any styles from 3rd-party css styles. You can also use import or include to break your styles further and use `custom.scss` as a main file to arrange your styles. Refer to `gulpfile.js` to configure settings.

`styles.css` is generated from gulp.js. This contains Foundation styles, other 3rd-party scss files, and `custom.scss` file. To include new SCSS file or rearrange SCSS files in certain sequence, refer to `gulpfile.js`.

`override-styles.css` file is considered a stylesheet for quick overrides done by designers and it does not require a Sass setup. This will contain minimal tweaks of structure, typography, skin.

### js/

`custom.js` file contains your Javascript and jQuery code. This file is added at the very bottom of `scripts.js` file after Zurb Foundation javascript components and other 3rd party javascript files. Check `gulpfile.js` file for which JS file to include on build and to reorder files.


### templates/

Contains a basic setup of Grav Theme, partials directory and a default.html.twig template. You'll notice after you have laid out your Design comps and implemented any CSS transitions/animations, you'll soon dig further into Grav Theming. For tutorial on Grav Theming, refer to this link: [Grav Theming Tutorial](https://learn.getgrav.org/themes/theme-tutorial).

This directory will later follow Grav's theming convention base on Grav's Page content hierarchy rules. Refer to Grav's Pages Documentation for more info: [Grav Content Pages](https://learn.getgrav.org/content/content-pages).

### blueprints.yaml, gravtheme-frontendflow.php, gravtheme-frontendflow.yaml

These files are what registers your theme to Grav's engine core. Refer to this link for more info: [Grav Theming Tutorial](https://learn.getgrav.org/themes/theme-tutorial)

### bower.json

Contains a list of 3rd-party CSS and JS plugins/frameworks. Run `bower install` to install download a copy of these plugins. Sass is strongly utilized for awesome customization regarding performance and built of css and js files.

This file may also be strongly tied with `gulpfile.js` file, `css/`, and `js/` directories.

### package.json

Holds the tools we need to run in order to create awesome front end experience.

### gulpfile.js

This holds how our Sass and JS files are built and deliver.

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
