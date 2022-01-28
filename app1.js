console.log("linked");

let slider = document.getElementById("myRange");
let output = document.getElementById("output");
// output.innerHTML = slider.value
const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}
 let boxLocation = document.getElementById('horizontal-object')
let lef = boxLocation.getBoundingClientRect();

console.log(lef.left);
let x = 0-3400;

// function myMove() {
//   let id = null;
//   const elem = document.getElementById('horizontal-object');
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 3500);
//   function frame() {
//     if (pos == 5000) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = 0 + "px";
//       elem.style.left = 0-3500+ "px";
//     }
//   }
// }
  //
  // let test = document.getElementById("horizontal-object");
  //
  // // This handler will be executed only once when the cursor
  // // moves over the unordered list
  // test.addEventListener("mouseenter", function( event ) {
  //   // highlight the mouseenter target
  //   // myMove();
  //   test.style.animationPlayState= " paused";
  //   event.target.style.color = "purple";})
  //
  //   test.addEventListener("mouseleave", function( event ) {
  //     // highlight the mouseenter target
  //     test.style.animationPlayState= "";
  //     event.target.style.color = "purple";})
  //
  //
  //
  //
  //     slider.addEventListener("mouseenter", function( event ) {
  //       document.getElementById('horizontal-object').style.transform= `translateX(${this.value}px)`
  //
  //       test.style.animationPlayState= " paused";
  //       event.target.style.color = "purple";})
  //
  //
  //     slider.addEventListener("mouseleave", function( event ) {
  //       // document.getElementById('horizontal-object').style.transform= `translateX(${this.value}px)`
  //       // highlight the mouseenter target
  //       test.style.animationPlayState= "";
  //       event.target.style.color = "purple";})

    // $('.marquee').mouseenter(() => { $(this).css("animation: marquee 15s linear infinite"); } );
    //
    // $('.marquee').mouseleave(() => { $(this).css("animation: none"); } );

// const sliderTime = async() => {
//
//
// for(let i = 0; i<850; i++){
//   slider.value -=10;
//   await wait(50)
//   let x = 0-3400;
//   if(slider.value<= x){
//     slider.value =0;
//   }
//   console.log(x);
//   console.log( `this translateX(${slider.value}px)`);
//   document.getElementById('horizontal-object').style.transform= `translateX(${slider.value}px)`
// }
// }
//  sliderTime()

// slider.oninput = function() {
// document.getElementById('horizontal-object').style.transform= `translateX(${this.value}px)`
//   // output.innerHTML = this.value;
// // test.style.animationPlayState= "paused";
//
// }
