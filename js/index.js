import {animate} from 'https://esm.sh/animejs';

let welcomeAnimated = false;
let aboutAnimated = false;

$(window).on("scroll", function () {
    let yCoords = window.scrollY;
    //console.log(window.scrollY);
    if(yCoords > 98 && !welcomeAnimated){
        welcomeAnimated = true;
        animate("#welcome-img", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
    else if(window.scrollY > 705 && !aboutAnimated){
        aboutAnimated = true;
        animate("#about-img", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
});