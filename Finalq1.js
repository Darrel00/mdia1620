const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/

let registry = [];
let settings = {
  //alcohol setting goes here
  alcohol:true,
  age:19
};

//rename this to RegisterUser
function RegisterUser(){
  //ask for the age with readline
  if(settings.alcohol === true) {
  readline.question("Please tell me your age: ", _age=>{
    if(_age < settings.age){
      console.log("You are not allowed to drink here.");
      StartApp();
    } else {
      console.log("You are allowed to drink here.")
      StartApp();
    }
  })
} else {
  console.log("Come on in! Everyone is welcome!");
  StartApp();
}
}

//rename this to ToggleAlcohol
function ToggleAlcohol(){
  //toggle alcohol setting
  settings.alcohol = !settings.alcohol;
  console.log("Alcohol setting toggled")
  StartApp();
}

//rename this to NotifyAll
function NotifyAll(){
  //go through the array to notify everyone
  if(settings.alcohol === true){
  console.log(`Only people over the age of ${settings.age} can come in.`)
  StartApp();
  } else {
    console.log("Everyone is welcome.")
    StartApp();
  }
}

function ChangeAge(){
    readline.question("What is the age to come into the pub? ", _age=>{
        for(let key in settings){
       if(key === _age){
        console.log(`Age requirement is ${settings.age}`)
       }
    }
    StartApp();
    })
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "register"){
      RegisterUser();
    } else if(_command === "alcohol"){
      ToggleAlcohol();
    } else if(_command === "notify"){
      NotifyAll();
    } else if(_command === "change age"){
      ChangeAge();
    } else if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();

/* Plan: 
- Implement functions into StartApp function
- Use if else statements for registering users
- Define alcohol as true in settings
- Define age requirements in notify function
- Test the code
- Try challenges
*/