// ==UserScript==
// @name     Prevent Youtube Sign-in Prompt
// @version  1.1
// @author   Kuregon
// @match    *://www.youtube.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

function check() {
  const button_wrapper = document.querySelector("#dismiss-button");
  
  if(button_wrapper !== null){ 
    const button = button_wrapper.querySelector("#button")
  	button.click()
    
    console.log("closed annoying prompt")
  }
};

check();
// somehow the script does not launch again you go to another video on the same tab
// so we just run the script every second
// definitely not optimal but it works
var clock = setInterval(check, 1000);
