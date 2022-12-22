const valueInput = document.querySelector("#name-input");
const valueOutput = document.querySelector('#name-output');
// valueInput.addEventListener("input", (event) => {
//     if (event.currentTarget.value !== '') {
//         return valueOutput.textContent = event.currentTarger.value
//     } if (event.currentTarget.value === '') {
//         return valueOutput.textContent = 'Anonymous'
//     }
// });

valueInput.addEventListener("input", (event) => {
     event.currentTarget.value !== '' ? 
     valueOutput.textContent = event.currentTarget.value : 
     valueOutput.textContent = 'Anonymous' });