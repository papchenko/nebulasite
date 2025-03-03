// header scroll with behavior 1.0

export const headerScroll = () => {
    function scrollHeader() {
        const header = document.getElementById('header');
        if (this.scrollY >= 80) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    };
    window.addEventListener('scroll', scrollHeader);
}