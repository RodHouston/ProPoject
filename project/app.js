const photos = ['../photos/js1.png', '../photos/js2.png', '../photos/cat.png', '../photos/flowerBox.png',
'../photos/cat2.png', '../photos/css.png', '../photos/html.jpg',
'../photos/terminalGames.png', '../photos/spaceBattle.png', '../photos/finalPink.png',
'../photos/font.png', '../photos/ink2.png', '../photos/css2.png' ]
const description= ['Snippit HTML code using Math.Random function to print random strings from an array', 'Rock, Paper, Scissors Teminal game made with HTML', 'First web page from an homework assignment. Designed using HTML and CSS','Mock up webpage using CSS Flexbox and HTML  ', 'Connected web page from an homework assignment. Designed using HTML and CSS', 'Code snippits from CSS style sheets', 'Code snippit showcasing some HTML', 'Terminal Game from an hmework assignment: Choose your own adventure', 'Screenshot of a web game made with HTML, CSS, Javascript and jquery','Grapic designed using Adobe Photoshop', 'T-shirt grapic designed using Adobe Photoshop', 'T-shirt grapic designed using Adobe Photoshop', 'CSS styling snippit' ]


$(() => {


console.log(photos);

///////////working on how to get the pictures to zoom on click

let  zoom = document.getElementById("zoomBox");
let cap = document.getElementById('captionBox')

for (let i = 0; i < photos.length; i++) {
  const $divBox = $('<div>').attr(`id`, `div${i}`)

  const zoomBig = () => {
    console.log("the function worked");
    zoom.style.backgroundImage = `url(${photos[i]})`
    zoom.style.display = 'block'
    zoom.style.zIndex = "5"
    // let p = document.createTextNode(description[i]);
    // p.appendTo('cap')
    cap.innerHTML = description[i]


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
