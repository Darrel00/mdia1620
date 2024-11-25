const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBan:false,
}

function AddUserToRegistry() {
  //user readline to prompt for the name of the user to be added
  if(settings.addRegistry === true){
    readline.question("What is the name of the user?", _user=>{
  //adding user did not work for me; it should be === instead of = -Daniel
      if(_user === false){
      console.log("This user is banned")
      StartApp();
    } else {
      users.push(_user);
      StartApp();
    }
    })
  } else {
    console.log("Access Denied")
    readline.close();
  }
}

function CheckRegistry() {
  //loop through all the users and log them
  console.log("List of registered users: ")
  for(let i=0; i<users.length; i++){
    console.log(users[i])
  }
  StartApp();
}

function BanUser(){
  //use readline to prompt for the name of the user to be banned
  readline.question("What is the name of the user you want to ban?", _user=>{
    users.shift(_user);
    banned.push(_user);
    _user === false;
    StartApp();
  })
}

function CheckBanned(){
  //loop through all the banned users and log them
  console.log("List of banned users: ")
  for(let i=0; i<banned.length; i++){
    console.log(banned[i])
  }
  StartApp();
}

// I like how you did this here, instead of toggling you ask for a yes or no input 
// which totally works as well -Daniel
function Runsettings(){
  readline.question('Would you like to allow adding? (yes/no)', _mode =>{
    if(_mode === "yes"){
      settings.addRegistry = true;
      StartApp();
    } else if(_mode === "no"){
      settings.addRegistry = false;
      StartApp();
    }
    else {
      Runsettings();
    }
  });
}

function StartApp() {
  readline.question("What would you like to do? ", (_command) => {
    //add other commands here to add
    if(_command === "add") {
      AddUserToRegistry();
    } else if(_command === "reg"){
      CheckRegistry();
    } else if (_command === "ban"){
      BanUser();
    } else if (_command === "banlist"){
      CheckBanned();
    } else if (_command === "settings"){
      Runsettings();
    } 
  
    if (_command !== "quit") {
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();

/*

Plan: 
- Implement commands into StartApp() function
- Create AddUserToRegistry function using users.push(_Username)
- Create CheckRegistry function using for loop: "for(let i=0; i<users.length; i++)"
- Create BanUser function using users.shift(_Username)
- Create CheckBanned function using for loop: "for(let i=0; i<banned.length; i++)"
- Create settings function for challenges

Review by Daniel:
Overall code is functional, but should use spacing to organize the code.
Settings function needed to be added with if else statement for challenge 2.
Checking ban list for adding users doesn't work.
 */
