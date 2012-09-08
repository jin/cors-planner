/* ========================================
 * CORS Planner - colors assign
 *
 * assign a color
 *
 * Author: Wang Zhuochun
 * Last Edit: 07/Sep/2012 10:24 PM
 * ========================================
 * <License>
 * ======================================== */

define(function(require, exports) {

    "use strict";
    /*jshint jquery:true, laxcomma:true, maxerr:50*/

    // colors http://147colors.com/ 
    var colors = [
        "midnightblue"
      , "forestgreen"
      , "royalblue"
      , "darkslateblue"
      , "saddlebrown"
      , "seagreen"
      , "steelblue"
      , "indigo"
      , "teal"
      , "orangered"
      , "green"
      , "navy"
      , "orange"
      , "olive"
      , "dodgerblue"
      , "darkorange"
    ]
    , index = 0
    , length = colors.length;

    exports.get = function(c) {
        index = (index + 1) % length;
        return c ? c : colors[index];
    };

    exports.length = function() { return length; }
    exports.used = function() { return index; }
});