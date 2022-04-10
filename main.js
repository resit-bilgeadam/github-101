const btn = document.querySelector("#btn");

function handleClick() {
  console.log("HELLO WORLD!");
  alert("Clicked Button!!");
}

btn.addEventListener("click", handleClick);
