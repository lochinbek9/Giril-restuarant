"use strict";

//  PRELOAD

const preloader = document.querySelector(".preload");
const menuBtn = document.querySelector(".nav-open-btn");
const navbar = document.querySelector(".navbar");

const closeBtn = document.querySelector(".close-btn");


window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

// menuBtn.addEventListener('click', (e) => {
//     navbar.classList.toggle('active');
// });

// closeBtn.addEventListener('click', (e) => {
//     navbar.classList.toggle('active');
// });

/* add event listener on multiple elements */

const addEventOnElements = function(elements, eventType, callback){
    
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    
    }
};

addEventOnElements()