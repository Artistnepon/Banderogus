const form = document.getElementById('form') as HTMLFormElement;
const launchBtn = document.getElementById("submit") as HTMLButtonElement;
const goToFormButton = document.getElementById("scrollBtn") as HTMLButtonElement;
const userEmailField = document.getElementById("email") as HTMLInputElement;
const userNameField = document.getElementById("name") as HTMLInputElement;

if (!form || !launchBtn || !goToFormButton || !userEmailField || !userNameField) {
    console.error("Element is disabled on the page!");
}

goToFormButton.addEventListener('click', (event: Event): void => {
    event.preventDefault();
    form.scrollIntoView({ behavior: 'smooth' });
});

launchBtn.addEventListener('click', (): void => {
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

    const goose = document.createElement('div') as HTMLDivElement;
    goose.classList.add('gus-anim');
    form.appendChild(goose);

    setTimeout((): void => {
        goose.remove();
    }, 4000);
});