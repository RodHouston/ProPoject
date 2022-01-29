const photos = ['../photos/js1.png', '../photos/js2.png', '../photos/cat.png',
'../photos/cat2.png', '../photos/css.png', '../photos/html.jpg',
'../photos/terminalGames.png', '../photos/spaceBattle.png', '../photos/finalPink.png',
'../photos/font.png', '../photos/ink2.png', '../photos/css2.png' ]


$(() => {


console.log(photos);

///////////working on how to get the pictures to zoom on click 
for (let i = 0; i < photos.length; i++) {
  const $divBox = $('<div>').attr(`id`, `div${i}`)
  const $img = $('<img>').attr(`id`, `img${i}`)

  let  zoom = document.getElementById("zoomBox");
  let imgs = document.getElementById('imgBig');

  const zoomBig = () => {
    console.log("the function worked");
    imgs.style.backgroundImage = 'url(../photos/css2.png)'
    zoom.style.display = 'block'



console.log(imgs);
}
$divBox.appendTo('#main').addClass('contentBoxes')
.css('background-image',`url(${photos[i]})`).click(zoomBig)





  }
})
