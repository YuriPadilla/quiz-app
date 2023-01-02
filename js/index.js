const cards = [
    {
        question: "What property flips the axes in Flexbox?", 
        tags: ["#html", "#flexbox", "#css"], 
        answer: "The Property is 'html'",
        isBookmarked: false,
        answerShowed: false,
    },
    {
        question: "What property flips the axes in Flexbox?", 
        tags: ["#html", "#flexbox", "#css"], 
        answer: "The Property is 'html'",
        isBookmarked: false,
        answerShowed: false,
    },
    {
        question: "What property flips the axes in Flexbox?", 
        tags: ["#html", "#flexbox", "#css"], 
        answer: "The Property is 'html'",
        isBookmarked: false,
        answerShowed: false,
    },
    {
        question: "What property flips the axes in Flexbox?", 
        tags: ["#html", "#flexbox", "#css"], 
        answer: "The Property is 'html'",
        isBookmarked: false,
        answerShowed: false,
    },
];

const mainContainer = document.querySelector('[data-js="main-container"]');

let cardsToDisplay = "all";
function toggleCardsToDisplay(newValue) {
    cardsToDisplay = newValue;
}

const iconToShowHome = document.querySelector('[data-js="icon-home"]');
iconToShowHome.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    toggleCardsToDisplay("all");
    displayCards();
});

const iconToShowBookmark = document.querySelector('[data-js="icon-bookmark"]');
iconToShowBookmark.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    toggleCardsToDisplay("bookmarked");
    displayCards();
});

displayCards();

function displayCards() {
    if (cardsToDisplay === "all") {
        showAllCards();
    } else if (cardsToDisplay === "bookmarked") {
        showBookmarkedCards();
    }
}

function showAllCards() {
    cards.forEach((card) => {

        const sectionCard = document.createElement("section");
        sectionCard.classList.add("card");
    
        const imgBookmark = document.createElement("img");
        imgBookmark.classList.add("bookmark-icon");
        imgBookmark.setAttribute("src", `./icons/${card.isBookmarked === false ? "icon-bookmark.svg" : "icon-bookmark-filled.svg"}`);
        imgBookmark.addEventListener("click", () => {
            card.isBookmarked = !card.isBookmarked;
            imgBookmark.setAttribute("src", `./icons/${card.isBookmarked === false ? "icon-bookmark.svg" : "icon-bookmark-filled.svg"}`);
        });
        imgBookmark.setAttribute("alt", "bookmark");
    
        const h2Question = document.createElement("h2");
        h2Question.textContent = card.question;
    
        const ulTagsContainer = document.createElement("ul");
        ulTagsContainer.classList.add("tag-list");
        card.tags.forEach((tag) => {
            const newTag = document.createElement("li");
            newTag.classList.add("tag-list__item");
            newTag.textContent = tag;
            ulTagsContainer.append(newTag);
        });
    
        const buttonShowHideAnswer = document.createElement("button");
        buttonShowHideAnswer.classList.add("button");
        buttonShowHideAnswer.setAttribute("type", "button");
        buttonShowHideAnswer.textContent = (card.answerShowed === false ? "Show Answer" : "Hide Answer");
        buttonShowHideAnswer.addEventListener("click", () => {
            card.answerShowed = !card.answerShowed;
            buttonShowHideAnswer.textContent = (card.answerShowed === false ? "Show Answer" : "Hide Answer");
            outputAnswer.textContent = (card.answerShowed === false ? "" : card.answer);
        });
    
        const outputAnswer = document.createElement("output");
        outputAnswer.classList.add("output");
        outputAnswer.textContent = (card.answerShowed === false ? "" : card.answer);
    
        sectionCard.append(imgBookmark, h2Question, ulTagsContainer, buttonShowHideAnswer, outputAnswer);
    
        mainContainer.append(sectionCard);
    });
}

function showBookmarkedCards() {
    cards.forEach((card) => {
        if (card.isBookmarked === true) {
            const sectionCard = document.createElement("section");
        sectionCard.classList.add("card");
    
        const imgBookmark = document.createElement("img");
        imgBookmark.classList.add("bookmark-icon");
        imgBookmark.setAttribute("src", `./icons/${card.isBookmarked === false ? "icon-bookmark.svg" : "icon-bookmark-filled.svg"}`);
        imgBookmark.addEventListener("click", () => {
            card.isBookmarked = !card.isBookmarked;
            imgBookmark.setAttribute("src", `./icons/${card.isBookmarked === false ? "icon-bookmark.svg" : "icon-bookmark-filled.svg"}`);
        });
        imgBookmark.setAttribute("alt", "bookmark");
    
        const h2Question = document.createElement("h2");
        h2Question.textContent = card.question;
    
        const ulTagsContainer = document.createElement("ul");
        ulTagsContainer.classList.add("tag-list");
        card.tags.forEach((tag) => {
            const newTag = document.createElement("li");
            newTag.classList.add("tag-list__item");
            newTag.textContent = tag;
            ulTagsContainer.append(newTag);
        });
    
        const buttonShowHideAnswer = document.createElement("button");
        buttonShowHideAnswer.classList.add("button");
        buttonShowHideAnswer.setAttribute("type", "button");
        buttonShowHideAnswer.textContent = (card.answerShowed === false ? "Show Answer" : "Hide Answer");
        buttonShowHideAnswer.addEventListener("click", () => {
            card.answerShowed = !card.answerShowed;
            buttonShowHideAnswer.textContent = (card.answerShowed === false ? "Show Answer" : "Hide Answer");
            outputAnswer.textContent = (card.answerShowed === false ? "" : card.answer);
        });
    
        const outputAnswer = document.createElement("output");
        outputAnswer.classList.add("output");
        outputAnswer.textContent = (card.answerShowed === false ? "" : card.answer);
    
        sectionCard.append(imgBookmark, h2Question, ulTagsContainer, buttonShowHideAnswer, outputAnswer);
    
        mainContainer.append(sectionCard);
        }
    });
}
