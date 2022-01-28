
const topBoxImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
let $topBox = $('.topBox')

$('#home').hover(function(){
  $($topBox).css("background-image", `url(${topBoxImgs[0]})`);
  }, function(){
  $($topBox).css("background-image", `url(${topBoxImgs[4]})`);
});

$('#bio').hover(function(){
  $($topBox).css("background-image", `url(${topBoxImgs[1]})`);
  }, function(){
  $($topBox).css("background-image", `url(${topBoxImgs[4]})`);
});

$('#resume').hover(function(){
  $($topBox).css("background-image", `url(${topBoxImgs[2]})`);
  }, function(){
  $($topBox).css("background-image", `url(${topBoxImgs[4]})`);
});
$('#social').hover(function(){
  $($topBox).css("background-image", `url(${topBoxImgs[3]})`);
  }, function(){
  $($topBox).css("background-image", `url(${topBoxImgs[4]})`);
});
// const changeToBio = () => {
// $topBox.css('background-image', `url(${topBoxImgs[1]})`)
// }
//
// const changeToResume = () => {
// $topBox.css('background-image', `url(${topBoxImgs[2]})`)
// }
//
// const changeToSocial = () => {
// $topBox.css('background-image', `url(${topBoxImgs[3]})`)
// }



const sliders = document.querySelector('.carouselBox')


let scrollAmount = 0;
let scrollPerClick = 650;
function sliderScrollLeft(){
  console.log('clicked left');
  console.log(` scroll befor ${scrollAmount}`);
  if(scrollAmount<=0){
    scrollAmount=2790;
    sliders.scrollTo({
      top:0,
      left: (scrollAmount -= scrollPerClick),
      behavior: "smooth"
    })
    console.log(` scroll if ${scrollAmount}`);
  }else{
    sliders.scrollTo({
    top:0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });

  // scrollAmount -= scrollPerClick
  console.log(` scroll after ${scrollAmount}`);
}
}

function sliderScrollRight(){
  console.log('clicked right');
  console.log( sliders.scrollWidth);
  if(scrollAmount< sliders.scrollWidth- 1000 ){

    sliders.scrollTo({
      top:0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth"
    })
  }else{
    console.log('you are at the end');
    // sliders.style.opacity =.5;
    scrollAmount=0
    sliders.scrollTo({
      top:0,
      left: (0),
      behavior: "smooth"

    })
  }

}






$(() => {
  // let $switch = $('.carouselBox').children().last().remove()
  // $switch.prependTo('.carouselBox')
  //
let $topBox = $('.topBox')
$topBox.css('background-image', `url(${topBoxImgs[4]})`)


})
