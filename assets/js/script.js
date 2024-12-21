"use strict";

//  PRELOAD

const preloader = document.querySelector(".preload");
const menuBtn = document.querySelector(".nav-open-btn");
const nav = document.querySelector(".navbar");

const closeBtn = document.querySelector(".close-btn");


window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

menuBtn.addEventListener('click', (e) => {
    nav.classList.toggle('active');
});

closeBtn.addEventListener('click', (e) => {
    nav.classList.toggle('active');
});

/* add event listener on multiple elements */

const addEventOnElements = function(elements, eventType, callback){
    
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
};

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function(){
    const lastScrollBottom = lastScrollPos < window.scrollY
    if(lastScrollBottom) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function(){
    if(this.window.scrollY >= 50){
        header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
});

/* HERO */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

function updateSliderPos(){
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

function slideNext(){
    if(currentSlidePos >= heroSliderItems.length - 1){
        currentSlidePos = 0;
    } else{
        currentSlidePos++;
    }
    updateSliderPos();
}
console.log(heroSliderNextBtn);


heroSliderNextBtn.addEventListener("click", slideNext);

function slidePrev(){
    if(currentSlidePos <= 0){
        currentSlidePos = heroSliderItems.length - 1;
    } else{
        currentSlidePos--;
    }
    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

let autoSlideInterval;

function startAuto(){
    autoSlideInterval = setInterval((() =>{
        slideNext();
    }, 7000));
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], 
    "mouseover", function(){clearInterval(autoSlideInterval)});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn],  
    "mouseout", autoSlide);

window.addEventListener("load", autoSlide);   
