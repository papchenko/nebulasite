// custom ligtbox 1.0

export const lightboxCustom = () => {
const productItems = document.querySelectorAll('.product__img'),
      totalProductItem = productItems.length,
      lightbox = document.querySelector('.lightbox'),
      lightboxImg = lightbox.querySelector('.lightbox__img'),
      lightboxClose = lightbox.querySelector('.lightbox__close'),
      lightboxCounter = lightbox.querySelector('.caption__counter'),
      next = lightbox.querySelector('.next__item'),
      prev = lightbox.querySelector('.prev__item');

let   itemIndex = 0;

    for(let i=0; i<totalProductItem; i++) {
        productItems[i].addEventListener('click', function() {
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    };
    function changeItem() {
        let imgSrc = productItems[itemIndex].querySelector(".product__img img").getAttribute("src");
        lightboxImg.src = imgSrc;
        lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalProductItem;
    }
    function nextItem() {
        if(itemIndex === totalProductItem-1) {
            itemIndex = 0;
        } else {
            itemIndex++;
        }
            changeItem();
    };
    function prevItem() {
        if(itemIndex === 0) {
            itemIndex = totalProductItem-1;
        } else {
            itemIndex--;
        }
            changeItem();
    };
    next.addEventListener('click', nextItem);
    prev.addEventListener('click', prevItem);

    function toggleLightbox() {
        lightbox.classList.toggle("open");
    };

    lightbox.addEventListener('click', function() {
        if(event.target === lightboxClose || event.target === lightbox) {
                    toggleLightbox();
                }
            }
        );
    }