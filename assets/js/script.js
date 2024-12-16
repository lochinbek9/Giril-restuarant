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

menuBtn.addEventListener('click', (e) => {
    navbar.classList.toggle('active');
});

closeBtn.addEventListener('click', (e) => {
    navbar.classList.toggle('active');
});