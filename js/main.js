var poem = [
  "View as computers to interact with the bike",
  "Mobile Devices is not fully supported",
    "Click on screen to drive the bike",
    "Welcome to Messy as Ninja Lead",
    "Click onto the traffic Lights ",
    "This project made by @Voth000",
    "Ninja Lead is a street icon in Vietnam",
    "View as computers to interact with the bike",
    "Mobile Devices is not fully supported",
  ];
  var i = 0;
  // text animation loop
  (function loop() {
      document.querySelector("#pi").textContent = poem[i];
      i = ++i % poem.length;
      setTimeout(loop, 1000);
  })();

  var colors = [
  "#E565A6", 
  "#00BCF2", 
  "#FFF233", 
  "#4CF6C0",
  "#FF7E5C"
];

  var currentColor = 0
  var lis = document.querySelectorAll("#pi")
  function changeColor() {
    --currentColor
    if (currentColor < 0) currentColor = colors.length -1
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.color = colors[(currentColor +i) % colors.length]
    }
  }
  setInterval(changeColor, 1000)

/* Separate your event handling code from your markup */





let fancy = document.querySelector(".vang");


// Set up the mouseover event handler
fancy.addEventListener("mouseover", function(){
 this.classList.add("hover");       // Change to the Go image
 this.classList.remove("normal");  // Remove the Stop image
});

fancy.addEventListener("mouseout", function(){
 this.classList.add("normal");     // Change to the Stop image
 this.classList.remove("hover");    // Remove the Go image
});

/* Separate your event handling code from your markup */

// Get a reference to the element

let fancy1 = document.querySelector(".hong");

// Set up the mouseover event handler
fancy1.addEventListener("mouseover", function(){
 this.classList.add("hover");       // Change to the Go image
 this.classList.remove("normal");  // Remove the Stop image
});

fancy1.addEventListener("mouseout", function(){
 this.classList.add("normal");     // Change to the Stop image
 this.classList.remove("hover");    // Remove the Go image
});

/* Separate your event handling code from your markup */

// Get a reference to the element

let fancy2 = document.querySelector(".xanh");

// Set up the mouseover event handler
fancy2.addEventListener("mouseover", function(){
 this.classList.add("hover");       // Change to the Go image
 this.classList.remove("normal");  // Remove the Stop image
});

fancy2.addEventListener("mouseout", function(){
 this.classList.add("normal");     // Change to the Stop image
 this.classList.remove("hover");    // Remove the Go image
});





////
const el = document.getElementById('vang');

const hiddenDiv = document.getElementById('vangpop');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el.addEventListener('mouseout', function handleMouseOut() {
  // 👇️ if you used visibility property to hide div
  hiddenDiv.style.visibility = 'hidden';
});


////
const el1 = document.getElementById('hong');

const hiddenDiv1 = document.getElementById('hongpop');

// ✅ Show hidden DIV on hover
el1.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv1.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el1.addEventListener('mouseout', function handleMouseOut() {
  // 👇️ if you used visibility property to hide div
  hiddenDiv1.style.visibility = 'hidden';
});

////
const el2 = document.getElementById('xanh');

const hiddenDiv2 = document.getElementById('xanhpop');

// ✅ Show hidden DIV on hover
el2.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv2.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el2.addEventListener('mouseout', function handleMouseOut() {
  // 👇️ if you used visibility property to hide div
  hiddenDiv2.style.visibility = 'hidden';
});


/////make parallax effect

document.addEventListener("mouseover",parallax);
function parallax(e){
    document.querySelectorAll("#paral").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 200 ;
        var y = (e.clientY * moving_value) / 200 ;

        move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
    })
}

//// disable hover for touch screen



