// ==UserScript==
// @name         Make logicalincrements wide again
// @namespace    https://www.logicalincrements.com/
// @version      0.1
// @description  Logicalincrements has a horizontal scroll for some countries, yet has very wide margins. Try to remove both.
// @author       You
// @match        www.logicalincrements.com
// @grant        none
// ==/UserScript==
// Written with the help of this tutorial: https://somethingididnotknow.wordpress.com/2013/07/01/change-page-styles-with-greasemonkeytampermonkey/

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function() {
    'use strict';
    addGlobalStyle('.container-fluid { max-width: 100% !important; padding-left: 5px !important; padding-right: 5px !important; }');
})();
