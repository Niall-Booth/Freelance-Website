import {animate} from 'https://esm.sh/animejs';

let welcomeAnimated = false;
let aboutAnimated = false;

$(window).on("scroll", function () {
    let yCoords = window.scrollY;
    //console.log(window.scrollY);
    if(window.scrollY > 688 && !aboutAnimated){
        aboutAnimated = true;
        animate("#about-img", {
            opacity: [0, 1],
            translateX: [-500, 0],
            duration: 1500,
            ease: "out(3)"
        });
    }
});