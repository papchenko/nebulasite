// show menu
import { showMenu } from "./modules/showMenu";
showMenu();

// scroll header
import { headerScroll } from "./modules/headerScroll";
headerScroll();

// show scroll up
// import { showScrollUp } from "./modules/showScrollUp";
// showScrollUp();

// slider
// import { slider } from "./modules/swiper";
// slider();

// show accordeon
// import { showAccordeon } from "./modules/showAccordeon";
// showAccordeon();

// lightbox
// import { lightboxCustom } from "./modules/lightboxCustom";
// lightboxCustom();

// gsap
// import { gsap } from "gsap/gsap-core";
// gsap();

// scroll reveal
// import { scrRev } from "./modules/ScrollReveal";
// scrRev();

document.getElementById("copyButton").addEventListener("click", function() {
    const textArea = document.createElement("textarea");
    textArea.value = "npm i nebulabuild";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    
    const button = document.getElementById("copyButton");
    button.classList.add("show-tooltip");
    
    setTimeout(() => {
        button.classList.remove("show-tooltip");
    }, 3000);
});