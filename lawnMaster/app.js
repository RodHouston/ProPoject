 // const prompt = require('prompt-sync')();

const landScaper = {
  name:"",
  money:0,
  pay:1,
  tools:["teeth",]
}

let money = landScaper.money;
let pay = landScaper.pay
let day = 0;
let lawns = 0;
let jobDone = 0;
let toolNum = 0;
let tool = landScaper.tools[landScaper.tools.length-1]
let userAns ="";


const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

console.log(`money b4 payday ${money}`);
const cutLawn = async () => {
  document.getElementById("img").style.visibility = "visible";
  toolDiv = document.getElementById("toolDiv");
  toolDiv.innerHTML = "Cuttin Lawns";
  await wait(1000);

  day= Math.floor(Math.random() * 7)
  lawn= Math.floor(Math.random() * 10)
  console.log(day);
  console.log(lawn);
  jobDone= day *lawn
  let payDay = jobDone * pay
  landScaper.money+= payDay
  toolDiv.innerHTML = `You worked ${day} days and cut ${lawn} lawns per day. You got paid ${payDay}`;
  if(landScaper.money>= 1000){
    toolDiv.innerHTML = "You earned enough to retire. Great job. GAME-OVER"
    endGame()
  }
  if (landScaper.money >= 5){
    console.log(` we got paid ${landScaper.money}`);

    toolDiv.innerHTML = `You worked ${day} days and cut ${lawn} lawns per day. You got paid ${payDay}`;
    // await wait(2000)
    buyTool()
  }
}



const buyTool = () => {
   console.log("You are on a roll");
   moneyDiv = document.getElementById("monDiv");
   moneyDiv.innerHTML = `You now have $${landScaper.money}`;
    console.log(`You now have $${money}`);

  if (landScaper.money >= 500 && toolNum<4){
    console.log("Would you like you like to Hire a team for $500");
     let userAns = prompt("Would you like you like to Hire a team for $500 Y  ||  N")
    if (userAns.toLowerCase()== "y"){
        toolNum=4
    } else if(userAns.toLowerCase() ==  "n" ){
      console.log(`You will continue using your ${tool}`);
      console.log("Good Luck");
    } else{
      buyTool();
    }
  }
   if (landScaper.money >= 250 && toolNum<3){
    console.log("Would you like you like to buy CutMaster3000 for $250");
      userAns = prompt("Would you like you like to buy CutMaster3000 $250  Y  ||  N")
    if (userAns.toLowerCase()== "y"){
      toolNum=3
    } else if(userAns.toLowerCase() ==  "n" ){
      console.log(`You will continue using your ${tool}`);
      console.log("Good Luck");
    } else{
      buyTool();
    }
  }
   if (landScaper.money >= 25 && toolNum<2){
    console.log("Would you like you like to buy old lawnmower for $25");
     userAns = prompt(" Would you like you like to buy old lawnmower for $25 Y  ||  N")
    if (userAns.toLowerCase()== "y"){
      toolNum=2;
    } else if(userAns.toLowerCase() ==  "n" ){
      console.log(`You will continue using your ${tool}`);
      console.log("Good Luck");
    } else{
      buyTool();
    }
  }
   if (landScaper.money >= 5 && toolNum<1){
    console.log("Would you like you like to buy scissors for $5");
       let userAns = prompt("Would you like you like to buy scissors for $5 Y  ||  N")
    if (userAns.toLowerCase()== "y"){
      toolNum=1;
    } else if(userAns.toLowerCase() ==  "n" ){
      console.log("You will continue using your teeth");
      console.log("Good Luck");
    } else{
      buyTool();
    }
  }

  switch (toolNum){
    case 1:
    landScaper.tools.push(" scissors")
    console.log("you bought rusty scissors");
    pay = 5;
    landScaper.money -= 25;
    imgVar = document.getElementById("img");
    imgVar.src = "scissors.png";
    break;
    case 2:
    landScaper.tools.push(" Old Lawnmower")
    console.log("Old Lawnmower");
    pay = 50;
    landScaper.money -= 50;
    imgVar = document.getElementById("img");
    imgVar.src = "oldLm.png";
    break;
    case 3:
    landScaper.tools.push("Battery Powered lawnmower")
    console.log("Battery Powered lawnmower");
    pay = 100;
    landScaper.money -= 250;
    imgVar = document.getElementById("img");
    imgVar.src = "lm3000.png";
    break;
    case 4:
    landScaper.tools.push("Team of starving Students")
    console.log("Team of starving Students");
    console.log("Your team works fast and you now make $250 per job");
    pay = 250;
    landScaper.money -= 500;
    imgVar = document.getElementById("img");
    imgVar.src = "team.jpeg";
    break;
  }


  console.log("/////////////////////////////////////");
  toolDiv = document.getElementById("toolDiv");
  tool = landScaper.tools[landScaper.tools.length-1];
  toolDiv.innerHTML = `you have ${tool} and make ${pay} per job`;
  console.log("/////////////////////////////////////");
}

 const startGame =() =>{
 console.log("got it again");
 moneyDiv = document.getElementById("monDiv");
 moneyDiv.innerHTML = `Lets get to Work. Cut Lawns to earn enough money to retire`;
 document.getElementById('startButton').style.opacity = ".2"
cutLawn()
}

const endGame= async () => {
 await wait(1000)
  let replay = prompt("Would you like to play again? Y || N")
  if (replay.toLowerCase() == "y"){
    landScaper.money = 0;
    toolNum = 0;
    startGame();
  }else if ( replay.toLowerCase() == "n"){
    toolDiv = document.getElementById("monDiv");
    toolDiv.innerHTML = `GAME-OVER, Thanks for playing`;
  }else {
    endGame();
  }
}
