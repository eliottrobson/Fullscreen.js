/*!
 * Fullscreen.js
 * Fullscreen.js is a lightweight wrapper around the fullscreen API
 * for fast and browser compliant development.
 *
 * @version 1.0.0
 * @author Eliott Robson, https://eliottrobson.me
 * @link https://github.com/eliottrobson/fullscreen.js
 */

 interface HTMLElement {
     mozRequestFullScreen: () => void;
     webkitRequestFullscreen: () => void;
     msRequestFullscreen: () => void;
 }

 interface Document {
     mozCancelFullScreen: () => void;
     mozFullScreenElement: Element;
     msFullscreenElement: Element;
 }


 class Fullscreen {
     private item: HTMLElement;

     public constructor(item: HTMLElement) {
         this.item = item;
     }

     toggle(enable?: boolean): void {
         if (typeof enable === "undefined") {
             enable = !this.active();
         }

         if (enable) {
             this.enable();
         } else {
             this.disable();
         }
     }

     enable(): void {
         let element = this.item;

         if (element.requestFullscreen) {
             element.requestFullscreen();
         } else if (element.mozRequestFullScreen) {
             element.mozRequestFullScreen();
         } else if (element.webkitRequestFullscreen) {
             element.webkitRequestFullscreen();
         } else if (element.msRequestFullscreen) {
             element.msRequestFullscreen();
         }
     }

     disable(): void {
         if (document.exitFullscreen) {
             document.exitFullscreen();
         } else if (document.mozCancelFullScreen) {
             document.mozCancelFullScreen();
         } else if (document.webkitExitFullscreen) {
             document.webkitExitFullscreen();
         }
     }

     active(): boolean {
         return !!(document.fullscreenElement ||
             document.webkitFullscreenElement ||
             document.mozFullScreenElement ||
             document.msFullscreenElement);
     }
 }
