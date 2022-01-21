"use strict";

document.body.style.backgroundColor = "#E0F0FD";

let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elList = document.querySelector(".list");
let elBtnClear = document.querySelector(".btn-crear");

let todosArr = [];

elList.addEventListener("click", function (evt) {
    if (evt.target.matches(".close__btn")) {
        let todoIdBtn = evt.target.dataset.todoId * 1;
        let todoFound = todosArr.findIndex((todo) => todo.id === todoIdBtn);

        todosArr.splice(todoFound, 1);

        elList.innerHTML = null;

        todoRender(todosArr, elList)
    }
})

elBtnClear.addEventListener("click", function () {
    // elList.innerHTML = null;
    todosArr.splice(0, todosArr.length);
    elList.innerHTML = null;
})

let todoRender = function (arr, element) {
    arr.forEach(newArr => {
        let elListItem = document.createElement("li");
        let elCloseBtn = document.createElement("button");

        elListItem.setAttribute("class", "list__item");
        elCloseBtn.setAttribute("class", "close__btn");

        elListItem.textContent = newArr.name
        elCloseBtn.dataset.todoId = newArr.id;

        element.appendChild(elListItem);
        elListItem.appendChild(elCloseBtn);

    });
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    let inputValue = elInput.value;

    let todosObj = {
        id: todosArr.length * 1,
        name: inputValue,
        isCompleted: false,
    }

    todosArr.push(todosObj);

    elList.innerHTML = null;
    elInput.value = null;

    todoRender(todosArr, elList)
})
