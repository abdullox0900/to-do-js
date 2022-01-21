"use strict";

document.body.style.backgroundColor = "#E0F0FD";

let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elList = document.querySelector(".list");

let todosArr = [];

let todoRender = function (arr, element) {
    arr.forEach(newArr => {
        let elListItem = document.createElement("li");
        let elCloseBtn = document.createElement("button");

        elListItem.setAttribute("class", "list__item");
        elCloseBtn.setAttribute("class", "close__btn");

        elListItem.textContent = newArr.name

        element.appendChild(elListItem);
        elListItem.appendChild(elCloseBtn);

    });
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    let inputValue = elInput.value;

    let todosObj = {
        id: todosArr.length,
        name: inputValue,
        isCompleted: false,
    }

    todosArr.push(todosObj);

    elList.innerHTML = null;
    elInput.value = null;

    todoRender(todosArr, elList)
})
