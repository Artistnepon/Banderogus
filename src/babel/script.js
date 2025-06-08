"use strict";
var form = document.getElementById('form');
var launchBtn = document.getElementById("submit");
var goToFormButton = document.getElementById("scrollBtn");
var userEmailField = document.getElementById("email");
var userNameField = document.getElementById("name");
if (!form || !launchBtn || !goToFormButton || !userEmailField || !userNameField) {
    console.error("Element is disabled on the page!");
}
goToFormButton.addEventListener('click', function (event) {
    event.preventDefault();
    form.scrollIntoView({ behavior: 'smooth' });
});
launchBtn.addEventListener('click', function () {
    if (!userNameField.value) {
        if (!userEmailField.value) {
            userEmailField.placeholder = "Ви маєте ввести свою електронну пошту!";
            return;
        }
        userNameField.placeholder = "Ви маєте ввести своє ім'я!";
        return;
    } else if (!userEmailField.value) {
        userEmailField.placeholder = "Ви маєте ввести свою електронну пошту!";
        return;
    }
    console.log("User email:", userEmailField.value, "User name:", userNameField.value);
    launchBtn.disabled = true;
    launchBtn.style.opacity = '0.7';
    userEmailField.value = "";
    userNameField.value = "";
    var goose = document.createElement('div');
    goose.classList.add('gus-anim');
    form.appendChild(goose);
    setTimeout(function () {
        goose.remove();
    }, 4000);
});