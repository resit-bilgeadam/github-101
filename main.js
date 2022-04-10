const btn = document.querySelector("#btn");
const changeBackground = document.querySelector("#changeBackground");

function handleClick() {
  alert("Clicked Button!!");
}
function changeBackgroundHandler(){
  document.querySelector('body').style.background = 'grey'
}

btn.addEventListener("click", handleClick);
changeBackground.addEventListener('click',changeBackgroundHandler)