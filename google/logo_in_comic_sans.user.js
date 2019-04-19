// ==UserScript==
// @name          Replace logo with Comic Sans on Google frontpage
// @description   Someone four years ago said that then new Google logo was almost in sans. And it was.
// @author        Sco7689
// @include       http://www.google.com/*
// @include       https://www.google.com/*
// @include       http://google.com/*
// @include       https://google.com/*
// @run-at        document-end
// @version       0.0.4
// @namespace     google.com
// ==/UserScript==
(function() {
    var logoChild = document.getElementById("hplogo");
    var mySpan = document.createElement("span");

    var letter_G = document.createElement("span");
    letter_G.innerHTML = "G";
    letter_G.style.color = "#4285F4";
    mySpan.appendChild(letter_G);
    
    var letter_o = document.createElement("span");
    letter_o.innerHTML = "o";
    letter_o.style.color = "#EA4335";
    mySpan.appendChild(letter_o);
    
    var letter_o2 = document.createElement("span");
    letter_o2.innerHTML = "o";
    letter_o2.style.color = "#FBBC05";
    mySpan.appendChild(letter_o2);
    
    var letter_g = document.createElement("span");
    letter_g.innerHTML = "g";
    letter_g.style.color = "#4285F4";
    mySpan.appendChild(letter_g);
    
    var letter_l = document.createElement("span");
    letter_l.innerHTML = "l";
    letter_l.style.color = "#34A853";
    mySpan.appendChild(letter_l);

    var letter_e = document.createElement("span");
    letter_e.innerHTML = "e";
    letter_e.style.color = "#EA4335";
    mySpan.appendChild(letter_e);

    mySpan.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
    mySpan.style.fontSize = '92px';
    mySpan.style.fontWeight = "600";
    var logoNode = document.getElementById("lga");
    logoNode.replaceChild(mySpan, hplogo);
})();
