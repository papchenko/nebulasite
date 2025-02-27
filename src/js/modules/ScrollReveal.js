// scroll reveal animation 1.0

import ScrollReveal from 'scrollreveal';

export const scrRev = () => {
    const sr = ScrollReveal({
        origin: 'top', // set position (for example top, bottom, left, right)
        distance: '60px', // set in px (for example 60px)
        duration: 2500, // set duration (for example 2500)
        delay: 400, // set delay (for example 400)
    });
    
    sr.reveal(`.`);
     // set class (for example .first-class, .second-class, .third-class)
     
    sr.reveal(`.`, { delay: 700, origin: 'bottom' });
     // set others setting animations ({ interval: 100 })
}