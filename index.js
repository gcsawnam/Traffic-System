function fontcolor(x)
{
document.getElementById("demo").style.color = x;
}


 function moveright() {
    const img = document.getElementById("car1");
     img.style.left = `${img.offsetLeft + 10}px`;
  }
//   function moveleft() {
//     const img = document.getElementById('car1');
//     img.style.left = Number(img.style.left.slice(0, -2)) - 10 + 'px';
//   }