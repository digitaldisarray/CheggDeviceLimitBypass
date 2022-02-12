// ==UserScript==
// @name         Chegg - Device Limit Bypass
// @namespace    http://disarray.xyz/
// @version      0.1
// @description  Removes the popup and locks that prevent you from using chegg on a non-registered device
// @author       digitaldisarray
// @match        https://www.chegg.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @grant        GM.getValue
// ==/UserScript==

waitForKeyElements("[id$='C-common-devicemanager-add']", removeNode);

function removeNode(jNode) {
    jNode.remove();
    // Enable scrolling:
    $("body").removeClass("cs-dm-add");
    $("html").removeClass("cs-dm-add");
}
