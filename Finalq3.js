const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

let userColors = [];
let theme = {
  //the 5 color and their boolean value goes here
  red:true,
  green:true,
  blue:true,
  yellow:true,
  orange:true
};

//rename this to AddUserColor
function AddUserColor(){
  //add a color to userColors
  readline.question("Which colour would you like to add? ", _colour=>{
    let checkColour = false;
    for(let key in theme){
    if(_colour === key && theme[key] === true){
        checkColour = true;
        userColors.push(_colour) 
    } if(_colour === key && theme[key] === false) { 
        console.log("This colour is not allowed") 
    }
    }
    StartApp();
  })
}

//rename this to DisplayUserColors
function DisplayUserColors(){
  //add a color to userColors
  for(let i=0; i<userColors.length; i++){
    console.log(userColors[i])
  }
  StartApp();
}

//rename this to ToggleThemeColor
function ToggleThemeColor(){
  //ask for a color to toggle
  readline.question("Which colour would you like to toggle? ", _colour=>{
    for(let key in theme){
    if(key === _colour){
        theme.key = !theme.key;
        userColors.shift(_colour)
        console.log(`The colour, ${_colour}, is now ${theme.key}`)
    }
    }
    StartApp();
  })
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "add"){
        AddUserColor()
    }else if(_command === "display"){
        DisplayUserColors()
    }else if(_command === "toggle"){
        ToggleThemeColor()
    }else if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();

/* Plan: 
- Implement functions into StartApp function
- Add colours to theme object
- Add display function
- Implement toggle function to change key boolean
- Test the code
- Try challenges
*/