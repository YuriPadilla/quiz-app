const cards = [
    {
        question: "What property flips the axes in Flexbox?", 
        tags: ["#html", "#flexbox", "#css"], 
        answer: "The Property is 'html'",
        isBookmarked: false,
        showAnswer: false,
    },
    {
        question: "What property flips the axes in Flexbox?", 
        tags: ["#html", "#flexbox", "#css"], 
        answer: "The Property is 'html'",
        isBookmarked: false,
        showAnswer: false,
    },
    {
        question: "What property flips the axes in Flexbox?", 
        tags: ["#html", "#flexbox", "#css"], 
        answer: "The Property is 'html'",
        isBookmarked: false,
        showAnswer: false,
    },
];

cards.forEach((card) => {
    document.body.innerHTML += `
        <section class="card">
            <img class="bookmark-icon" src="./icons/icon-bookmark.svg" alt="bookmark" data-js="bookmark1" />

            <h2>${card.question}</h2>

            <ul class="tag-list">
                ${card.tags.map((tag) => {
                    return `<li class="tag-list__item">${tag}</li>`;
                }).join("")}
            </ul>
            
            <button class="button" data-js="button-answer1">${card.showAnswer === false ? "Show Answer" : "Hide Answer"}</button>

            <div class="output">
                <output data-js="showed-answer1"></output>
            </div>
        </section>
    `;
});

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

const buttonShowHide1 = document.querySelector('[data-js="button-anwer1"]');
const showedAnswer1 = document.querySelector('[data-js="showed-answer1"]');
buttonShowHide1.addEventListener("click", () => {
    if (buttonShowHide1.textContent === "Show Answer") {
        buttonShowHide1.textContent = "Hide Answer";
        showedAnswer1.textContent = "The Property is 'html'";
    } else if (buttonShowHide1.textContent === "Hide Answer") {
        buttonShowHide1.textContent = "Show Answer";
        showedAnswer1.textContent = "";
    }
    
});

/*++++++++++++++++++++*/

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

const buttonShowHide2 = document.querySelector('[data-js="button-anwer2"]');
const showedAnswer2 = document.querySelector('[data-js="showed-answer2"]');
buttonShowHide2.addEventListener("click", () => {
    if (buttonShowHide2.textContent === "Show Answer") {
        buttonShowHide2.textContent = "Hide Answer";
        showedAnswer2.textContent = "The Property is 'html'";
    } else if (buttonShowHide2.textContent === "Hide Answer") {
        buttonShowHide2.textContent = "Show Answer";
        showedAnswer2.textContent = "";
    }
    
});

/*++++++++++++++++++++*/

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

const buttonShowHide3 = document.querySelector('[data-js="button-anwer3"]');
const showedAnswer3 = document.querySelector('[data-js="showed-answer3"]');
buttonShowHide3.addEventListener("click", () => {
    if (buttonShowHide3.textContent === "Show Answer") {
        buttonShowHide3.textContent = "Hide Answer";
        showedAnswer3.textContent = "The Property is 'html'";
    } else if (buttonShowHide3.textContent === "Hide Answer") {
        buttonShowHide3.textContent = "Show Answer";
        showedAnswer3.textContent = "";
    }
    
});

/*++++++++++++++++++++*/