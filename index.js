const bodyElement = document.querySelector('[data-js="body--dark"]');
const questionsSymbolElement = document.querySelector('[data-js="questions--symbol--dark"]');
const imgElement = document.querySelector('[data-js="bookmark--darkmodus"]');


const buttonToggle = document.querySelector('[data-js="button--toggle"]');
buttonToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("darkModus")
    questionsSymbolElement.classList.toggle("counter__questions--symbol--dark");
    //imgElement.src = "./icons/icon-bookmark.png";
});



const bookmark1Element = document.querySelector('[data-js="bookmark1"]');
const bookmarkButton1 = document.querySelector('[data-js="bookmark__button1"]');
bookmarkButton1.addEventListener("click", () => {
    bookmark1Element.src = "./icons/icon-bookmark-filled.png";
});