
// Change hero image depending on thumbnail clicked
function changeImage(imgName)
  {
  image = document.getElementById('imgDisp');
  image.src = imgName;
  }

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// var button1 = document.getElementById("example-one");
// var button2 = document.getElementById("example-two");
// var button3 = document.getElementById("example-three");



// button1.addEventListener('click', function() {
//   if (button1.getAttribute("data-text-swap") == button1.innerHTML) {
//     button1.innerHTML = button1.getAttribute("data-text-original");
//   } else {
//     button1.setAttribute("data-text-original", button1.innerHTML);
//     button1.innerHTML = button1.getAttribute("data-text-swap");
//   }
// }, false);

// button2.addEventListener('click', function() {
//   if (button2.getAttribute("data-text-swap") == button2.innerHTML) {
//     button2.innerHTML = button2.getAttribute("data-text-original");
//   } else {
//     button2.setAttribute("data-text-original", button2.innerHTML);
//     button2.innerHTML = button2.getAttribute("data-text-swap");
//   }
// }, false);

// button3.addEventListener('click', function() {
//   if (button3.getAttribute("data-text-swap") == button3.innerHTML) {
//     button3.innerHTML = button3.getAttribute("data-text-original");
//   } else {
//     button3.setAttribute("data-text-original", button3.innerHTML);
//     button3.innerHTML = button3.getAttribute("data-text-swap");
//   }
// }, false);

// function brown(button) {

// }