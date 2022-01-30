let canmove = false;
let greenbtn = document.getElementById("green");
let car = document.getElementById("car1");
var left = 10;
let redbutton = document.getElementById("red");
let cannotmove = false;
var interval;
let yellowbtn = document.getElementById('yellow');

redbutton.addEventListener("click", function move1() {
  console.log(cannotmove);
  cannotmove = true;
  console.log(cannotmove);
  if (cannotmove) {
    clearInterval(interval);
  }
});

yellowbtn.addEventListener("click", function slowdown() {
  interval = setInterval(() => {
    moveright();
  }, 800);

}

);
   

greenbtn.addEventListener("click", function move() {
  console.log(canmove);
  canmove = true;
  console.log(canmove);

  interval = setInterval(() => {
    moveright();
  }, 20);
});

function fontcolor(x) {
  document.getElementById("demo").style.color = x;
}

function moveright() {
  const img = document.getElementById("car1");
  console.log("code sucess");

  img.style.left = left + "px";

  left += 10;
  console.log(left);

  if (left > 750) {
    left = -100;
  }
}
