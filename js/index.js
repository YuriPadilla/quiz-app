const bookmark1Element = document.querySelector('[data-js="bookmark1"]');
const bookmarkButton1 = document.querySelector('[data-js="bookmark__button1"]');
bookmarkButton1.addEventListener("click", () => {
    if(bookmark1Element.classList.contains("marked")) {
        bookmark1Element.src = "./icons/icon-bookmark.png";
        bookmark1Element.classList.toggle("marked");
    } else {
        bookmark1Element.src = "./icons/icon-bookmark-filled.png";
        bookmark1Element.classList.toggle("marked");
    }
});

const bookmark2Element = document.querySelector('[data-js="bookmark2"]');
const bookmarkButton2 = document.querySelector('[data-js="bookmark__button2"]');
bookmarkButton2.addEventListener("click", () => {
    if(bookmark2Element.classList.contains("marked")) {
        bookmark2Element.src = "./icons/icon-bookmark.png";
        bookmark2Element.classList.toggle("marked");
    } else {
        bookmark2Element.src = "./icons/icon-bookmark-filled.png";
        bookmark2Element.classList.toggle("marked");
    }
});

const bookmark3Element = document.querySelector('[data-js="bookmark3"]');
const bookmarkButton3 = document.querySelector('[data-js="bookmark__button3"]');
bookmarkButton3.addEventListener("click", () => {
    if(bookmark3Element.classList.contains("marked")) {
        bookmark3Element.src = "./icons/icon-bookmark.png";
        bookmark3Element.classList.toggle("marked");
    } else {
        bookmark3Element.src = "./icons/icon-bookmark-filled.png";
        bookmark3Element.classList.toggle("marked");
    }
});

const bookmark4Element = document.querySelector('[data-js="bookmark4"]');
const bookmarkButton4 = document.querySelector('[data-js="bookmark__button4"]');
bookmarkButton4.addEventListener("click", () => {
    if(bookmark4Element.classList.contains("marked")) {
        bookmark4Element.src = "./icons/icon-bookmark.png";
        bookmark4Element.classList.toggle("marked");
    } else {
        bookmark4Element.src = "./icons/icon-bookmark-filled.png";
        bookmark4Element.classList.toggle("marked");
    }
});

const bookmark5Element = document.querySelector('[data-js="bookmark5"]');
const bookmarkButton5 = document.querySelector('[data-js="bookmark__button5"]');
bookmarkButton5.addEventListener("click", () => {
    if(bookmark5Element.classList.contains("marked")) {
        bookmark5Element.src = "./icons/icon-bookmark.png";
        bookmark5Element.classList.toggle("marked");
    } else {
        bookmark5Element.src = "./icons/icon-bookmark-filled.png";
        bookmark5Element.classList.toggle("marked");
    }
});

const bookmark6Element = document.querySelector('[data-js="bookmark6"]');
const bookmarkButton6 = document.querySelector('[data-js="bookmark__button6"]');
bookmarkButton6.addEventListener("click", () => {
    if(bookmark6Element.classList.contains("marked")) {
        bookmark6Element.src = "./icons/icon-bookmark.png";
        bookmark6Element.classList.toggle("marked");
    } else {
        bookmark6Element.src = "./icons/icon-bookmark-filled.png";
        bookmark6Element.classList.toggle("marked");
    }
});