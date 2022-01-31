const photos = ['../photos/js1.png', '../photos/js2.png', '../photos/cat.png',
'../photos/cat2.png', '../photos/css.png', '../photos/html.jpg',
'../photos/terminalGames.png', '../photos/spaceBattle.png', '../photos/finalPink.png',
'../photos/font.png', '../photos/ink2.png', '../photos/css2.png' ]

$(() => {


console.log(photos);

///////////working on how to get the pictures to zoom on click

let  zoom = document.getElementById("zoomBox");


for (let i = 0; i < photos.length; i++) {
  const $divBox = $('<div>').attr(`id`, `div${i}`)

  const zoomBig = () => {
    console.log("the function worked");
    zoom.style.backgroundImage = `url(${photos[i]})`
    zoom.style.display = 'block'
    zoom.style.zIndex = "5"


   console.log(photos[i]);
}

$divBox.appendTo('#main').addClass('contentBoxes')
.css('background-image',`url(${photos[i]})`).click(zoomBig)
  }

  const exitZoom =() => {
    zoom.style.display = ''
  }
  $('#exit').click(exitZoom)

})
