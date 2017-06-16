/*!
 * Fullscreen.js
 * Fullscreen.js is a lightweight wrapper around the fullscreen API
 * for fast and browser compliant development.
 *
 * @version 1.0.0
 * @author Eliott Robson, https://eliottrobson.me
 * @link https://github.com/eliottrobson/fullscreen.js
 */
var Fullscreen = (function () {
    function Fullscreen(item) {
        this.item = item;
    }
    Fullscreen.prototype.toggle = function (enable) {
        if (typeof enable === "undefined") {
            enable = !this.active();
        }
        if (enable) {
            this.enable();
        }
        else {
            this.disable();
        }
    };
    Fullscreen.prototype.enable = function () {
        var element = this.item;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    };
    Fullscreen.prototype.disable = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    };
    Fullscreen.prototype.active = function () {
        return !!(document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement);
    };
    return Fullscreen;
}());
