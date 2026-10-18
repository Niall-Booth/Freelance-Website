import {animate} from 'https://esm.sh/animejs';

let serviceAnimated = false;
let prcing1Animated = false;
let prcing2Animated = false;
let contactAnimated = false;

$(window).on("scroll", function () {
    let yCoords = window.scrollY;
    //console.log(window.scrollY);
    if(yCoords > 97 && !serviceAnimated){
        serviceAnimated = true;
        animate(".service-img", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
    else if (yCoords > 708 && !prcing1Animated){
        prcing1Animated = true;
        animate("#pricing-display-1", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }

    else if(yCoords > 778 && !prcing2Animated){
        prcing2Animated = true;
        animate("#pricing-display-2", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
    
    else if(yCoords > 907 && !contactAnimated){
        contactAnimated = true;
        animate("#contact-button", {
            opacity: [0, 1],
            translateX: [300, 0],
            duration: 1000,
            ease: "out(3)"
        });
    }
});