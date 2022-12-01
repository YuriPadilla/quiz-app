const addForm = document.querySelector('[data-js="add-form"]');

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data.inputQuestion);

    //-------------> Create Elements
    const sectionCard = document.createElement("section");
    const buttonBookMark = document.createElement("button");
    const h2Question = document.createElement("h2");
    const formAnswer = document.createElement("form");
    const buttonShowAnwer = document.createElement("button");
    const divOutput = document.createElement("div");
    const imgBookMark = document.createElement("img");
    const divQuestion = document.createElement("div");
    const buttonSend = document.createElement("button");
    const output = document.createElement("output");
    const labelQuestion = document.createElement("label");
    const inputRadiusQuestion = document.createElement("input");

    //-------------> Add classes to the Elements
    sectionCard.classList.add("card");
    buttonBookMark.classList.add("bookmark-icon");
    formAnswer.classList.add("card__answers");
    buttonShowAnwer.classList.add("button");
    divOutput.classList.add("output");
    buttonSend.classList.add("button");

    //-------------> Add text to the Elements
    h2Question.textContent = `${data.inputQuestion}`;
    buttonShowAnwer.textContent = "Show Answer";
    buttonSend.textContent = "Send";
    inputRadiusQuestion.textContent = "#html";

    //-------------> Append nested Elements
    sectionCard.append(buttonBookMark, h2Question, formAnswer, buttonShowAnwer, divOutput);
    buttonBookMark.append(imgBookMark);
    formAnswer.append(divQuestion, buttonSend);
    divOutput.append(output);
    divQuestion.append(labelQuestion);
    labelQuestion.append(inputRadiusQuestion);

    //-------------> Append card to body
    document.body.append(sectionCard);


    // sectionCard
    // buttonBookMark
    // h2Question
    // formAnswer
    // buttonShowAnwer
    // divOutput
    // imgBookMark
    // divQuestion
    // buttonSend
    // output
    // labelQuestion
    // inputRadiusQuestion

});