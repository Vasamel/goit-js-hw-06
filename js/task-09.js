const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
console.log(button);
button.addEventListener("click", () => {
  color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = color.textContent;
  

  console.log("click");
  console.log(getRandomHexColor());
} )



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
