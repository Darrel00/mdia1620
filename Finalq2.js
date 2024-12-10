const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/

let badge = {
  //modes go here
  new:0,
  easy:0,
  medium:0,
  hardest:0,
  apocolypse:0,
};

//rename this to ShowStatus
function ShowStatus(){
  //loop through the badge and log all the mode and all their corresponding points
  for(let key in badge){
    console.log("Mode category", key, "has", badge[key], "points");
    StartApp();
  }
}

//rename this to AddPoints
function AddPoints(){
  //Add the point to the correct mode by capturing the readline
  readline.question("Which mode would you like to add a point to? ", _mode=>{
    let checkmode = false;
    for(let key in badge){
      if(key === _mode){
        checkmode = true;
      }
    }
      if(checkmode === true){
        badge[_mode]++;
      }
    StartApp();
  })
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "status"){
      ShowStatus();
    } else if(_command === "add"){
      AddPoints();
    } else if(_command === "badge total"){
        MakeBadge();
    } else if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

function MakeBadge(){
 for(let key in badge){
let total = key;
total = badge.new + badge.easy + badge.medium + badge.hardest + badge.apocolypse;
if(total <= 10){
    console.log("Horrible Newbie")
} else if(total >= 11 && total <= 20){
    console.log("Adventurer")
} else if(total >= 21 && total <= 30){
    console.log("slayer")
} else if(total >= 31 && total <= 40){
    console.log("divined")
} else if(total >= 41){
    console.log("eternal")
}
 }
}

StartApp();

/*Plan:
- Implement functions into StartApp function
- Create system modes in badge
- Use for loop for adding points function 
- Test the code
- Try to implement challenges
*/