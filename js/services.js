import {animate} from 'https://esm.sh/animejs';

let serviceAnimated = false;
let pricing1Animated = false;
let pricing2Animated = false;
let contactAnimated = false;

$(window).on("scroll", function () {
    let yCoords = window.scrollY;
    //console.log(window.scrollY);
    if(yCoords > 80 && !serviceAnimated){
        serviceAnimated = true;
        animate(".service-img", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
    else if (yCoords > 686 && !pricing1Animated && !pricing2Animated){
        pricing1Animated = true;
        pricing2Animated = true;
        animate(["#pricing-display-1", "#pricing-display-2"], {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
    
    else if(yCoords > 804 && !contactAnimated){
        contactAnimated = true;
        animate("#contact-button", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
});