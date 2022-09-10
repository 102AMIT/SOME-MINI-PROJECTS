let val = document.getElementById("input-area");

let startCounter = document.getElementsByClassName("btn")[0];
let clear;

startCounter.addEventListener("click", function () {
  let count = 0;
  let target = val.value;
  let current = document.querySelector(".current");
  // console.log(current.innerText);
  let next = document.querySelector(".next");
  // console.log(next.innerText);
  // function startCounter() {
  reset(current, next, clear, target);

  clear = setInterval(function () {
    if (count == target) {
      clearInterval(clear);
      return;
    }

    animate1(current, next);
    count++;
  }, 1000);
});
function animate1(current, next) {
  // console.log(next);
  next.classList.add("animate");

  setTimeout(function () {
    current.innerText = next.innerText;
    next.classList.remove("animate");
    next.innerText = parseInt(next.innerText) + 1;
  }, 500);
}

function reset(current, next, clear, target) {
  current.innerText = 0;
  next.innerText = 1;
  clearInterval(clear);
  val.value = "";
  return 0;
}
