const btn = document.querySelector("#btn");
const changeBackground = document.querySelector("#changeBackground");

function handleClick() {
  console.log("HELLO WORLD!");
  alert("Clicked Button!!");
}
function changeBackgroundHandler(){
  document.querySelector('body').style.background = 'grey'
}

btn.addEventListener("click", handleClick);
changeBackground.addEventListener('click',changeBackgroundHandler)