// ==UserScript==
// @name     Prevent Youtube Sign-in Prompt
// @version  1
// @author   Kuregon
// @match    *://www.youtube.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

function check() {
  console.log("running script");
  // a video without popup will have a hidden error-screen div with no childs.
  var hasChild = $('#error-screen').last().children().length;
  
  if (hasChild) {
    // reloading will get you to the video
    location.reload();
  }
};

check();
// somehow the script does not launch again you go to another video on the same tab
// so we just run the script every second
// definitely not optimal but it works
var clock = setInterval(check, 1000);
