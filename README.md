[![npm version](https://badge.fury.io/js/lgs-vue.svg)](https://www.npmjs.com/package/lgs-vue)
[![build status](https://travis-ci.org/littlegreensoftware/lgs-vue.svg?branch=master)](https://travis-ci.org/littlegreensoftware/lgs-vue)

# lgs-vue

> A library of Vue.js components build and maintained by Little Green Software in Durham, NC, USA.

## Installation

This project is published to npm under the name `lgs-vue`.

## Updates

We're leveraging the VueCLI to build modules ready for distribution. Inside of `src` you can create a new component as a *.vue file. When ready to distribute, edit `index.js` to import and export you component.
Then, navigate to that directory in your terminal and run `vue build index.js --prod --lib`. This will package everything up in the `dist` folder.

To publish to NPM, copy the `package.tpl.json` file into `dist`, update the version number, and run npm publish from the command line. (You'll need to be auth'd on npm).

Also, please update the version number in `package.tpl.json` and the root `package.json` to reflect the latest version number.

## Usage

For usage information, [see the docs](//github.com/littlegreensoftware/lgs-vue/wiki).

## To-dos

- automate versioning from the command line
