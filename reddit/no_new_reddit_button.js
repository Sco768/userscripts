// ==UserScript==
// @name         no new reddit button
// @namespace    http://reddit.com/
// @version      0.1
// @description  Hide "get new reddit" button
// @author       Sco7689
// @match        https://*.reddit.com/*
// @grant        none
// ==/UserScript==

// This script was done with the help of this tutorial: https://somethingididnotknow.wordpress.com/2013/07/01/change-page-styles-with-greasemonkeytampermonkey/

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
    addGlobalStyle('.redesign-beta-optin { display: none !important; }');
})();
