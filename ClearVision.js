// ==UserScript==
// @name         ClearVision
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var link = document.createElement("link");
link.href = "https://cdn.discordapp.com/attachments/965460197072044062/1075577634777473044/ClearVision.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);
})();
