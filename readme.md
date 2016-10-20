Widget component
================

[![build status](https://img.shields.io/travis/spasdk/component-widget.svg?style=flat-square)](https://travis-ci.org/spasdk/component-widget)
[![npm version](https://img.shields.io/npm/v/spa-component-widget.svg?style=flat-square)](https://www.npmjs.com/package/spa-component-widget)
[![dependencies status](https://img.shields.io/david/spasdk/component-widget.svg?style=flat-square)](https://david-dm.org/spasdk/component-widget)
[![devDependencies status](https://img.shields.io/david/dev/spasdk/component-widget.svg?style=flat-square)](https://david-dm.org/spasdk/component-widget?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/spasdk)


Widget is a component to build user interface, an instance of [Component](https://github.com/spasdk/component) module.


## Installation ##

```bash
npm install spa-component-widget
```


## Usage ##

Add the constructor to the scope:

```js
var Widget = require('spa-component-widget');
```

Create invisible widget:

```js
var widget = new Widget({
    $node: window.pmInfoWidget
});
```

Show it:

```js
widget.show();
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/spasdk/component-widget/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`spa-component-widget` is released under the [MIT License](license.md).
