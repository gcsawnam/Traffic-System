let canmove = false;
let greenbtn = document.getElementById("green");
let car = document.getElementById("car1");
var left = 10;
let redbutton = document.getElementById("red");
let cannotmove = false;
let interval;
let yellowbtn = document.getElementById("yellow");

redbutton.addEventListener("click", function move1() {
  document.getElementById("demo").innerHTML = "You pressed Red";
  console.log(cannotmove);
  cannotmove = true;
  console.log(cannotmove);
  if (cannotmove) {
    clearInterval(interval);
  }
});

yellowbtn.addEventListener("click", function slowdown() {
  clearInterval(interval);
  document.getElementById("demo").innerHTML = "You pressed yellow";
  console.log("clearinterval");
  interval = setInterval(() => {
    moveright();
  }, 200);
});

greenbtn.addEventListener("click", function move() {
  clearInterval(interval);
  document.getElementById("demo").innerHTML = "You pressed green";
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
  console.log("code sucess");

  car.style.left = left + "px";

  left += 10;
  console.log(left);

  if (left > 750) {
    left = -100;
  }
}
