"use strict";

document.body.style.backgroundColor = "#E0F0FD";

let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elList = document.querySelector(".list");
let elBtnClear = document.querySelector(".btn-clear");

let elAllRes = document.querySelector(".res-all");
let elComRes = document.querySelector(".res-com");
let elUncomRes = document.querySelector(".res-uncom");

let elAllBtn = document.querySelector(".btn-all");
let elComBtn = document.querySelector(".btn-com");
let elUncomBtn = document.querySelector(".btn-uncom");

let todosArr = [];

elList.addEventListener("click", function (evt) {
    if (evt.target.matches(".close__btn")) {
        let todoIdBtn = evt.target.dataset.todoId * 1;
        let todoFound = todosArr.findIndex((todo) => todo.id === todoIdBtn);

        todosArr.splice(todoFound, 1);
        elList.innerHTML = null;

        todoRender(todosArr, elList);
    }
    if (evt.target.matches(".item__checkbox")) {
        let checkboxTodoId = evt.target.dataset.checkId * 1;
        let foundCheckTodo = todosArr.find((todo) => todo.id === checkboxTodoId);

        foundCheckTodo.isCompleted = !foundCheckTodo.isCompleted;
        elList.innerHTML = null;

        todoRender(todosArr, elList)
    }
})

let todoRender = function (arr, element) {
    arr.forEach(newArr => {

        let elListItem = document.createElement("li");
        let elCloseBtn = document.createElement("button");
        let elCheckbox = document.createElement("input");
        let elSpan = document.createElement("item__run");

        elListItem.setAttribute("class", "list__item");
        elCloseBtn.setAttribute("class", "close__btn");
        elCheckbox.setAttribute("class", "item__checkbox");
        elSpan.setAttribute("class", "item__run");

        elListItem.textContent = newArr.name;
        elCloseBtn.dataset.todoId = newArr.id;
        elCheckbox.type = "checkbox";
        elCheckbox.dataset.checkId = newArr.id;

        if (newArr.isCompleted) {
            elCheckbox.checked = true;
        }

        element.appendChild(elListItem);
        elListItem.appendChild(elCloseBtn);
        elListItem.appendChild(elCheckbox);
        elListItem.appendChild(elSpan);

        elAllRes.textContent = todosArr.length;
        elComRes.textContent = todosArr.filter((todo) => todo.isCompleted).length
        elUncomRes.textContent = todosArr.filter((todo) => !todo.isCompleted).length
    });
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    let inputValue = elInput.value;

    let todosObj = {
        id: todosArr[todosArr.length - 1]?.id + 1 || 0,
        name: inputValue,
        isCompleted: false,
    }

    todosArr.push(todosObj);

    elList.innerHTML = null;
    elInput.value = null;

    todoRender(todosArr, elList);
});


elBtnClear.addEventListener("click", function () {
    elList.innerHTML = null;
    elAllRes.innerHTML = 0;
    elComRes.innerHTML = 0;
    elUncomRes.innerHTML = 0;
    todosArr.splice(0, todosArr.length);
});

elAllBtn.addEventListener("click", function () {
    elList.innerHTML = null

    todoRender(todosArr, elList)
});

elComBtn.addEventListener("click", function () {
    let filteredComplete = todosArr.filter((todo) => todo.isCompleted)
    elList.innerHTML = null;

    todoRender(filteredComplete, elList)
});

elUncomBtn.addEventListener("click", function () {
    let filteredComplete = todosArr.filter((todo) => !todo.isCompleted);
    elList.innerHTML = null;

    todoRender(filteredComplete, elList)
});
