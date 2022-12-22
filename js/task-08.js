const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();


    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formElements = { mail, password };

    if (mail === "" || password === "") {
        return alert('заповніть всі поля');

    }
    console.log(formElements);
    event.currentTarget.reset();
}