/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var Component = require('spa-component');


/**
 * Base widget implementation.
 *
 * A part-screen top-level layer that can operate as an independent separate entity.
 *
 * @constructor
 * @extends Component
 *
 * @param {Object} [config={}] init parameters (all inherited from the parent)
 * @param {boolean} [config.visible=false] component initial visibility state flag
 * @param {boolean} [config.focusable=false] component can accept focus or not
 */
function Widget ( config ) {
    // sanitize
    config = config || {};

    if ( DEVELOP ) {
        if ( typeof config !== 'object' ) {
            throw new Error(__filename + ': wrong config type');
        }
        // init parameters checks
        if ( 'className' in config && (!config.className || typeof config.className !== 'string') ) {
            throw new Error(__filename + ': wrong or empty config.className');
        }
    }

    // can't accept focus
    config.focusable = config.focusable || false;

    // hidden
    config.visible = config.visible || false;

    // set default className if classList property empty or undefined
    //config.className = 'widget ' + (config.className || '');

    // parent constructor call
    Component.call(this, config);
}


// inheritance
Widget.prototype = Object.create(Component.prototype);
Widget.prototype.constructor = Widget;

// set component name
Widget.prototype.name = 'spa-component-widget';


// public
module.exports = Widget;
