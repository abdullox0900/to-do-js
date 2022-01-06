document.body.style.backgroundImage = "linear-gradient(#4ca1af, #c4e0e5)";

let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form-input");
let elTaskList = document.querySelector(".task-list");
let elTaskItem = document.querySelector(".task-item");

let htmlTemplate = function(todo) {
    let elTaskItem = `
    <li class="task-item">${todo}<span class="del">X</span></li>
    `;

    elTaskList.innerHTML += elTaskItem
}

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    let todo = elFormInput.value;

    if (todo.length) {
        htmlTemplate(todo)
        elForm.reset();
    }
})

elTaskList.addEventListener("click", evt => {
    if (evt.target.classList.contains("del")) {
        evt.target.parentElement.remove();
    }
})