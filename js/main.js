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
  "#fb81e4", 
  "#00BCF2", 
  "#FFF233", 

  "#F23EE2",
  "#03e756",
  "#28d0ff"

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
    document.querySelectorAll(".img-bg").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 150 ;
        var y = (e.clientY * moving_value) / 150 ;

        move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
    })
}

//// disable hover for touch screen////

gsap.from(".txt", 0.8, {
  y: 40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 0,
});


TweenLite.to(".loader", 1, {
  width: "40vw",
  delay: 2,
});

gsap.to(".pre-loader", 2, {
  top: "-115vh",
  ease: "power4.inOut",
  delay: 3,
});

gsap.from("#caser", {
  opacity: 0, 
  x: 100, 
  duration: 1,
  delay: 4,
});

gsap.from("#casel", {
  opacity: 0, 
  y: 100, 
  duration: 1,
  delay: 3.6,
});

gsap.from(".footer", {
  opacity: 0, 
  y: 150, 
  duration: 1,
  delay: 4.2,
});

gsap.from("#paral", {
  opacity: 0, 
  x: 100, 
  duration: 2,
  delay: 4.3,
});

gsap.from("#vangpop", {
  opacity: 1, 
  y: 450, 
  duration: 1,
  delay: 3.4,
});

gsap.from("#hongpop", {
  opacity: 1, 
  y: 550, 
  duration: 1,
  delay: 3.6,
});

gsap.from("#xanhpop", {
  opacity: 1, 
  y: 650, 
  duration: 1,
  delay: 3.8,
});





