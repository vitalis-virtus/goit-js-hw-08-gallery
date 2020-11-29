import arrayImages from "./gallery-items.js";

const refs = {
    gallery: document.querySelector(".js-gallery"),
    lightbox: document.querySelector(".js-lightbox"),
    modalImg: document.querySelector(".lightbox__image"),
    closeModalBtn: document.querySelector('button[data-action = "close-lightbox"]'),
};

const createLi = (ref) => {
    const li = document.createElement('li');
    ref.append(li);
}

const createA = (ref, image) => {
    const a = document.createElement('a');
    a.classList.add("gallery__link");
    a.setAttribute('href', image.original);
    ref.lastChild.append(a);
}

const createImg = (perrentRef, image) => {
    const img = document.createElement('img');
    img.classList.add("gallery__image");
    img.setAttribute("src", image.preview);
    img.setAttribute("data-source", image.original);
    img.setAttribute("alt", image.description);
    perrentRef.append(img);
}

const imgClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName != "IMG") {
        return;
    }
    openModal(event);
};

const openModal = (event) => {
    refs.lightbox.classList.add("is-open");
    refs.modalImg.setAttribute("src", event.target.getAttribute("data-source"))
    window.addEventListener('keydown', onPressEsc);
}

const closeModal = () => {
    refs.lightbox.classList.remove("is-open");
    refs.modalImg.setAttribute("src", event.target.setAttribute("data-source", ""))
    window.removeEventListener('keydown', onPressEsc);

}

const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

const onPressEsc = (event) => {
    if (event.code === 'Escape') {
        closeModal();
    }    
    
}

arrayImages.forEach(image => {

    createLi(refs.gallery);

    createA(refs.gallery, image);

    createImg(refs.gallery.lastChild.firstChild, image);

})

refs.gallery.addEventListener('click', imgClick)

refs.closeModalBtn.addEventListener('click', closeModal)

refs.lightbox.firstElementChild.addEventListener('click', onBackdropClick)
