
const topBoxImgs = ["photos/home.jpg", "photos/bio.jpg", "photos/grad.jpg", "photos/social.jpg", "photos/5.jpg"]
let $topBox = $('.topBox')

$('#home').hover(function(){
  $($topBox).css("background-image", `url(${topBoxImgs[0]})`);
  }, function(){
  $($topBox).css("background-image", `url(${topBoxImgs[0]})`);
});

$('#bio').hover(function(){
  $($topBox).css("background-image", `url(${topBoxImgs[1]})`);
  }, function(){
  $($topBox).css("background-image", `url(${topBoxImgs[0]})`);
});

$('#resume').hover(function(){
  $($topBox).css("background-image", `url(${topBoxImgs[2]})`);
  }, function(){
  $($topBox).css("background-image", `url(${topBoxImgs[0]})`);
});
$('#social').hover(function(){
  $($topBox).css("background-image", `url(${topBoxImgs[3]})`);
  }, function(){
  $($topBox).css("background-image", `url(${topBoxImgs[0]})`);
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

let $switch = $('.carouselBox').children().last().remove()
$switch.prependTo('.carouselBox')



const sliders = document.querySelector('.carouselBox')

let scrollAmount = 0;
let scrollPerClick = 650;

function scrollL(){
  console.log('clicked left');
  console.log(` scroll befor ${scrollAmount}`);
  if(scrollAmount<=0){
    scrollAmount=2790;

    // let $switch = $('.carouselBox').children().last().remove()
    // $switch.prependTo('.carouselBox')

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
  console.log(` scroll after ${scrollAmount}`);
  }
}

function scrollR(){
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
    scrollAmount=0

    // let $switch = $('.carouselBox').children().first().remove()
    // $switch.appendTo('.carouselBox')

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



})
