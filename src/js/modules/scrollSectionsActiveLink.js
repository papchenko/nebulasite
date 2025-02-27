// scroll Sections Active Link
export const scrollSectActLnk = () => {
    const sections = document.querySelectorAll('section[id');
    const scrollActive = () => {
        const scrollY = window.pageYOffset;
        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
                
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
                    sectionClass.classList.add('active-link')
                } else {
                    sectionClass.classList.remove('active-link');
                }
        });
    };

    window.addEventListener('scroll', scrollActive);
};