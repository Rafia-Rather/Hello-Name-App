const span = document.getElementById("updateContent");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let yourName = prompt("Please Enter Your Name:");
  span.textContent = yourName;
});
