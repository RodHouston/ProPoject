console.log("linked");
//player battleship object
const playerBattleShip = {
  name:'USS Vegeta',
  hp:100,
  soldiers:50,
  attackShip:0,
  repairShip:0,
}

//global variables for user
let playerHealth = playerBattleShip.hp;
let sold = playerBattleShip.soldiers;
let playerAttackShip = playerBattleShip.attackShip;
let playerRepairShip = playerBattleShip.repairShip;

//CPU battleship object
const enemyBattleShip = {
  name:'USS Buu',
  eHp:100,
  eSoldiers:50,
  eAttackShip:0,
  eRepairShip:0,
}
//global variables for CPU
let enemyHealth = enemyBattleShip.eHp;
let eSold = enemyBattleShip.eSoldiers;
let enemyAttackShip = enemyBattleShip.eAttackShip;
let enemyRepairShip = enemyBattleShip.eRepairShip;

const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const alertUser = async () => {
 document.getElementById("pScore").innerText = `Player Health: ${playerHealth} Soldiers: ${sold} \n  `
 document.getElementById("pScore2").innerText = ` Enemy Health: ${enemyHealth} Enemy Soldiers: ${eSold} `
 await wait(500)
 alert("First add an attak ship or repair ship to your fleet. It takes 10 soldiers to man each ship and the ship adds to your attack power or your repair power.Attack or repair on your turn until the battle is won or lost. Good Luck.")
}

const cpuAttack= async() => {
// randomizing attack or repair for CPU
//if random is attack
  playerHealth-= enemyAttackShip*5;
  document.getElementById("pScore").innerText = `Player Health: ${playerHealth} Soldiers: ${sold} `
  document.getElementById("pScore2").innerText = `Enemy Health: ${enemyHealth} Soldiers: ${eSold} `
  document.getElementById("imgCPU").style.animationName = "attackCPU";
  document.getElementById("imgCPU").style.transform = 'rotate(210deg)'
   // console.log(randC);
  await wait(500)
  if (playerHealth<=0){
    alert('Game Over You Lost')
  }else if(enemyHealth<=0){
    alert('You saved the galaxy. Thank you hero')
  }
  for (let i = 0; i < 30; i++) {
    const r = Math.floor( Math.random() * 255);
    let randC = `rgba(${r}, ${0}, ${0}, .5)`
    document.getElementById("plyrBS").style.backgroundColor = randC;
    await wait(50)
    document.getElementById("imgCPU").style.backgroundImage = "";
  }
    document.getElementById("plyrBS").style.backgroundColor = "";

    await wait(500)
    document.getElementById("imgCPU").style.transform = 'rotate(270deg)'
    document.getElementById("imgCPU").style.animationName = "";
 }

const cpuRpair= async() => {
   // randomizing attack or repair for CPU
   //if random is attack
    enemyHealth+=enemyRepairShip*3;
    document.getElementById("pScore").innerText = `Player Health: ${playerHealth} Soldiers ${sold}`
    document.getElementById("pScore2").innerText = `Enemy Health: ${enemyHealth} Soldiers: ${eSold} `
    document.getElementById("imgCPU").style.animationName = "repairCPU";
    document.getElementById("imgCPU").style.transform = 'rotate(315deg)'
    for (let i = 0; i < 30; i++) {
      const g = Math.floor( Math.random() * 255);
      let randC = `rgba(${0}, ${g}, ${0}, .5)`
      document.getElementById("cpuBS").style.backgroundColor = randC;
      await wait(50)
    }
    document.getElementById("cpuBS").style.backgroundColor = "";

    await wait(500)
    document.getElementById("imgCPU").style.transform = 'rotate(270deg)'
    document.getElementById("imgCPU").style.animationName = "";
  }

const enemyTurn =() => {
  console.log('enemy turn');

  if(eSold >0){
    let enemyBuy = Math.floor(Math.random() * 10);
    if(enemyBuy<5){
      eSold-=10;
      enemyAttackShip++
      const $eAship = $('<div>').addClass("enAttShip").attr("id",'eAS')
      $eAship.appendTo('#score2')
      console.log("cpu bought attack ship");
    }else {
      eSold-=10;
      enemyRepairShip++;
      const $eRship = $('<div>').addClass("enRepShip").attr("id",'eAS')
      $eRship.appendTo('#score2')
      console.log("cpu bought repairship");
    }
}
  let enemyAorR = Math.floor(Math.random() * 10);

  if(enemyAttackShip>0 && enemyAorR <5){
    console.log('enemy Attacked');
    cpuAttack()
  }else if (enemyRepairShip>0) {
    console.log("enemy repaired");
    cpuRpair()
  }else{
    console.log('enemy Attacked');
    cpuAttack()
  }
  if( sold <=0){
    document.getElementById("but2").disabled = true;
    document.getElementById("but3").disabled = true;
    document.getElementById("but2").style.opacity = .2
    document.getElementById("but3").style.opacity = .2
    document.getElementById("but1").style.opacity = 1
    document.getElementById("but4").style.opacity = 1
  }
  else if (sold >=10){
  document.getElementById("but2").style.opacity = 1
  document.getElementById("but3").style.opacity = 1
  document.getElementById("but1").style.opacity = .2
  document.getElementById("but4").style.opacity = .2
  }
}

const attack = async () => {
  enemyHealth-=playerAttackShip*5;
// $('#eAS').remove()
  document.getElementById("pScore").innerText = `Player Health: ${playerHealth} Soldiers ${sold}`
  document.getElementById("pScore2").innerText = `Enemy Health: ${enemyHealth} Enemy Soldiers: ${eSold} `
  document.getElementById("imgPl").style.animationName = "attack";
  document.getElementById("imgPl").style.transform = 'rotate(45deg)'
// console.log(randC);
  await wait(500)
  if (playerHealth<=0){
    alert('Game Over You Lost')
  }else if(enemyHealth<=0){
    alert('You saved the galaxy. Thank you hero')
  }
  for (let i = 0; i < 30; i++) {
    const r = Math.floor( Math.random() * 255);
    let randC = `rgba(${r}, ${0}, ${0}, .5)`
    document.getElementById("cpuBS").style.backgroundColor = randC;
    await wait(50)
  }
  document.getElementById("cpuBS").style.backgroundColor = "";
  await wait(500)
  document.getElementById("imgPl").style.transform = 'rotate(90deg)'
  document.getElementById("imgPl").style.animationName = "";
  if(sold<=0){
    document.getElementById("but2").style.opacity = .2
    document.getElementById("but3").style.opacity = .2
  }
  enemyTurn()
}

const repair= async () => {
  playerHealth+=playerRepairShip*3;
  document.getElementById("pScore").innerText = `Player Health: ${playerHealth} Soldiers: ${sold}`
  document.getElementById("pScore2").innerText = `Enemy Health: ${enemyHealth} Soldiers: ${eSold} `
  document.getElementById("imgPl").style.animationName = "repair";
  document.getElementById("imgPl").style.transform = 'rotate(135deg)'
  for (let i = 0; i < 10; i++) {
    const g = Math.floor( Math.random() * 255);
    let randC = `rgba(${0}, ${g}, ${0}, .5)`
    document.getElementById("plyrBS").style.backgroundColor = randC;
    await wait(100)
  }
  document.getElementById("plyrBS").style.backgroundColor = "";
  await wait(500)
  document.getElementById("imgPl").style.transform = 'rotate(90deg)'
  document.getElementById("imgPl").style.animationName = "";
  enemyTurn()
}

const buyAttack =() => {
  if(sold>0){
    sold-=10;
    if(sold<=0){
      document.getElementById("but2").style.opacity = .2
      document.getElementById("but2").disabled = true;
      document.getElementById("but3").style.opacity = .2
      document.getElementById("but3").disabled = true;
    }
    playerAttackShip++;
    document.getElementById("pScore").innerText = `Player Health: ${playerHealth} Soldiers: ${sold}`
    document.getElementById("pScore2").innerText = `Enemy Health: ${enemyHealth} Enemy  Soldiers: ${eSold} `
    const $pAship = $('<div>').addClass("attShip").attr("id",'pAS')
    $pAship.appendTo('#score')
    // $('#pRS').remove()
  }
  document.getElementById("but1").style.opacity = 1
  console.log("you bought an attack Ship");
  document.getElementById("but2").style.opacity = .2
  document.getElementById("but3").style.opacity = .2
  if(playerRepairShip>0){
    document.getElementById("but4").style.opacity = 1
  }
}

const buyRepair =() => {
  if(sold>0){
    sold-=10;
    if(sold<=0){
      document.getElementById("but2").style.opacity = .2
      document.getElementById("but2").disabled = true;
      document.getElementById("but3").style.opacity = .2
      document.getElementById("but3").disabled = true;
    }
    playerRepairShip++;
    document.getElementById("pScore").innerText = `Player Health: ${playerHealth} Soldiers: ${sold}`
    document.getElementById("pScore2").innerText = `Enemy Health: ${enemyHealth} Enemy Soldiers: ${eSold} `
    const $pRship = $('<div>').addClass("repShip").attr("id",'pRS')
    $pRship.appendTo('#score')
    // $('#pAS').remove()
    document.getElementById("but4").style.opacity = 1
    document.getElementById("but2").style.opacity = .2
    document.getElementById("but3").style.opacity = .2
    if(playerAttackShip>0){
      document.getElementById("but1").style.opacity = 1
    }
  }
  console.log("you bought a Repair Ship");
}

$(()  => {
  const $scoreTitle = $("<h2>").addClass('scoreTitle')
  $scoreTitle.text("SCORE")
  $scoreTitle.prependTo('#score')

  const $scoreTitle2 = $("<h2>").addClass('scoreTitle')
  $scoreTitle2.text("SCORE")
  $scoreTitle2.prependTo('#score2')

  const $pShip = $('<div>').addClass("baseShip").attr("id",'plyrBS')
  $pShip.appendTo('#shipDiv')

  const $cpuShip = $('<div>').addClass("baseShip").attr("id",'cpuBS')
  $cpuShip.appendTo('#shipDiv')
  document.getElementById("but4").style.opacity = .2
  document.getElementById("but1").style.opacity = .2

  //starts it all
  alertUser()
})
