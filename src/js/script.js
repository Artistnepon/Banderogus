"use strict";
const form = document.getElementById('form');
const launchBtn = document.getElementById("submit");
const goToFormButton = document.getElementById("scrollBtn");
const userEmailField = document.getElementById("email");
const userNameField = document.getElementById("name");
if (!form || !launchBtn || !goToFormButton || !userEmailField || !userNameField) {
    console.error("Element is disabled on the page!");
}
goToFormButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.scrollIntoView({ behavior: 'smooth' });
});
launchBtn.addEventListener('click', () => {
    if (!userNameField.value) {
        if (!userEmailField.value) {
            userEmailField.placeholder = "Ви маєте ввести свою електронну пошту!";
            return;
        }
        userNameField.placeholder = "Ви маєте ввести своє ім'я!";
        return;
    }
    else if (!userEmailField.value) {
        userEmailField.placeholder = "Ви маєте ввести свою електронну пошту!";
        return;
    }
    console.log("User email:", userEmailField.value, "User name:", userNameField.value);
    launchBtn.disabled = true;
    launchBtn.style.opacity = '0.7';
    userEmailField.value = "";
    userNameField.value = "";
    const goose = document.createElement('div');
    goose.classList.add('gus-anim');
    form.appendChild(goose);
    setTimeout(() => {
        goose.remove();
    }, 4000);
});
