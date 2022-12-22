const inputRefs = document.querySelector('#font-size-control');
const textRefs = document.querySelector('#text');

inputRefs.addEventListener('input', (event) => {
    const fontSize = event.currentTarget.value;
    textRefs.style.fontSize = `${fontSize}px`
});