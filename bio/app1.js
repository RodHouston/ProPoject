//arrays of info used to populate side cards and zoom box
const aboutHead = ["About:", 'Where he came from:', "Where he is now:", "Where he is headed:"]
const about = [" Roderick Houston is a current student in General Assembly's Software Engineering Immersive program. Through this program, he is further developing his techniques for web development with CSS, HTML, and JavaScript. Additionally, Roderick is learning DOM manipulation through JQuery.", "Roderick is a native of Oklahoma City, Oklahoma and in 2002, graduated high school from Tipton High. In 2006, Roderick married his wife Shawna prior to her joining the United States Air Force and together, they began their journey around the world. Roderick and Shawna have two children, Cameron and Aaliyah. Roderick is a college graduate with a Bachelor's degree in Computer Science Software Engineering.",
" Being a military spouse requires constant movement to different locations, both overseas and across the United States. Roderick has had the opportunity to experience cultures in Italy and Guam, as well as live in Florida, a short return to Oklahoma and now resides in northern Virginia. While these experiences are rare for most, this constant state of movement has required Roderick to take on many careers. After much thought and research, he decided to pursue a career as a software engineer, for more stability with its opportunities for remote work.", "  Roderick truly enjoys a challenge and the complexity that comes with coding. His creativity is beyond reproach and would be an asset on any development team. Roderick’s plan is to work his way through the industry, gaining experience in developing web and mobile applications. His ultimate goal is to do software development with the automotive industry such as mobile device connectivity and digital vehicle interfaces. "]

  // zoom variable used to change elements of the zoomBox div
  let  zoom = document.getElementById("zoomBox");

  //loop used to create the elements of the side box and add specific functions to them
  for (let i = 0; i < about.length; i++) {
    const sideCard = $('<div>').addClass('sideCards').attr('id',`sideCard${i}`)
    const card = $('<div>').addClass('articles').attr('id',`article${i}`)
    const art = $('<article>').addClass('sideArt').attr('id',`sideArt${i}`)
    const h4 = $('<h4>').addClass('sideH4').attr('id',`sideH4${i}`)
    const p = $('<p>').addClass('sideP').attr('id',`sideP${i}`)


    //adding the zoom exit function to each element create by the loop
    const exitZoom =() => {
      zoom.style.display = ''
    }
    //adding the zoom function to each element create by the loop
    const zoomBig = () => {
      const $divExit = $("<div>").attr('id','exit')
      console.log("the function worked");
      $('#zoomBox').empty()
      $divExit.click(exitZoom).text('x').appendTo('#zoomBox')
      sideCard.clone().appendTo('#zoomBox')
      zoom.style.display = 'block'
      zoom.style.zIndex = "5"      
    }
    //used to give html creates buttons the function
    let li = document.getElementById(`li${i}`)
    //adding the zoom function to each element create by the loop
    li.addEventListener('click',zoomBig)

    sideCard.appendTo('#rightSide').click(zoomBig)
    card.appendTo(`#sideCard${i}`)
    art.appendTo(`#article${i}`)
    h4.appendTo(`#sideArt${i}`).text(aboutHead[i])
    p.appendTo(`#sideArt${i}`).text(about[i])
    console.log(`#sideCard${i}`);
    console.log(`li${i}`);
   }

console.log("linked");
