const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  /*
We will create an application that lists arrays within an object as looping through objects are useful
We will use for (let key in obj)

This application will allow hosts to give add users to their chat server, assign roles through permissions that are true or untrue

CHALLENGE,
Make a function and command to turn all permissions off and all permissions on

CHALLENGE 2,
Using the role object, make commands to assign different roles by looping through the settings and assing the values of the chosen role
  */

let users = [];

//CHALLENGE 2 ONLY
let role = {
  moderator:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:false,
    editChannels:true
  },
  simple:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:false,
    deleteAccounts:false,
    createChannels:false,
    editChannels:false
  },
  coAdmin:{
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:true,
    editChannels:true
  }
};

let permissions = {
  createData:false,
  readData:true,
  updateData:false,
  deleteData:true
}

function createUsers(){
      //user readline to prompt for the name of the user to be added
    readline.question("What is the name of the user?", _user=>{
      users.push(_user);
      StartApp();
    }
    )
}

//CHALLENGE 2 ONLINE
function assignRole(){
    //user readline to prompt for the new roles to be added to system
}

function listUsers(){
    //user readline to list out users
    console.log("List of registered users: ")
  for(let i=0; i<users.length; i++){
    console.log(users[i])
  }
  StartApp();
}

function assignPermissions(){
    //user readline to prompt for the admin to give list out added users and give individual permissions for each setting. 
    // This should give roles automatically based on whats assigned to the user based on conditions met.
    console.log("User list:")
    for(let i=0; i<users.length; i++){
      console.log(users[i])
    }
}

function showPermissions(){
    //loop through all the users settings and roles based on their permissions
    console.log("==========PERMISSIONS=============");
    for(let key in permissions){
      console.log("<label>", key, "</label>", "<button>", permissions[key], "</button>");
  }
}

function StartApp() {
    readline.question("What would you like to do? ", (_command) => {
      
      if(_command === "toggle user add"){
        permissions.createData = !permissions.createData;
        showPermissions();
      } else if(_command === "add user"){
        createUsers();
      } else if(_command === "user list"){
        listUsers();
      } else if(_command === "assign role"){
        assignPermissions();
      } else if(_command === "become admin"){
        for(let key in permissions){
          permissions[key] = true;
        }
      } else {
        console.log("I don't understand your command");
      }
      //add other commands here to add
      if (_command !== "quit") {
        StartApp();
      } else {
        readline.close();
      }
        StartApp();
    });
  }
  
  StartApp();
  
  /* Plan:
    -Implement StartApp() commands
    -Create user list and user name functions
    -Create permissions functions
    -Implement challenges if I have time

    Couldn't get review for code
  */