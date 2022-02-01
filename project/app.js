const photos = ['../photos/js1.png', '../photos/js2.png', '../photos/cat.png', '../photos/flowerBox.png',
'../photos/cat2.png', '../photos/css.png', '../photos/html.jpg',
'../photos/terminalGames.png', '../photos/spaceBattle.png', '../photos/finalPink.png',
'../photos/font.png', '../photos/ink2.png', '../photos/css2.png', '../photos/lawnMaster.png' ]
const description= ['Snippit HTML code using Math.Random function to print random strings from an array', 'Rock, Paper, Scissors Teminal game made with HTML', 'First web page from an homework assignment. Designed using HTML and CSS','Mock up webpage using CSS Flexbox and HTML  ', 'Connected web page from an homework assignment. Designed using HTML and CSS', 'Code snippits from CSS style sheets', 'Code snippit showcasing some HTML', 'Terminal Game from an hmework assignment: Choose your own adventure', 'Screenshot of a web game made with HTML, CSS, Javascript and jquery','Graphic designed using Adobe Photoshop', 'T-shirt graphic designed using Adobe Photoshop', 'T-shirt grapic designed using Adobe Photoshop', 'CSS styling snippit', "LawnMaster Web Game made wit HTML/CSS/JavsScript" ]


$(() => {

// console.log(photos);

///////////working on how to get the pictures to zoom on click
let  zoom = document.getElementById("zoomBox");
let cap = document.getElementById('captionBox')
//for loop is to get the photos on the DOM with the info and function attached.
for (let i = 0; i < photos.length; i++) {
  //this creates the divs that the photos will be attached to
  const $divBox = $('<div>').attr(`id`, `div${i}`)

  //This function is attached to each div as they are made,
  const zoomBig = () => {//creates a modal for each div/photo created
    console.log("the function worked");
    zoom.style.backgroundImage = `url(${photos[i]})`
    zoom.style.display = 'block'
    zoom.style.zIndex = "5"
    // let p = document.createTextNode(description[i]);
    // p.appendTo('cap')
    cap.innerHTML = description[i]
    // console.log(photos[i]);
    }
     /// trying to create different effects for the photos
  const testFlip = () => {
    $divBox.css('transform', 'rotate(.1deg) scale(1.5)')
    $divBox.css('transition', 'all .1s ease-in-out')
  }
  const flipOut = () => {
    $divBox.css('transform', 'rotate(360deg) perspective(600px) rotateX(45deg)')
    $divBox.css('transition', 'all 1s ease-in-out')
  }
  $divBox.appendTo('#main').addClass('contentBoxes')
  .css('background-image',`url(${photos[i]})`).click(zoomBig).mouseover(testFlip).mouseleave(flipOut)
  }

  // closes a modal
  const exitZoom =() => {
    zoom.style.display = ''
  }//gives the function to the exit button creatd in HTML
  $('#exit').click(exitZoom)
})
