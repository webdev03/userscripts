// ==UserScript==
// @name         Ctrl+Enter for the Scratch Forums
// @namespace    http://scratch.mit.edu/discuss/topic/*
// @version      1.0
// @description  9pfs on Scratch asked for it
// @author       webdev03
// ==/UserScript==

(function() {
  document.onkeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() == "enter") {
      document.querySelector("button.grey:nth-child(1)").click();
    }
  }
})();
