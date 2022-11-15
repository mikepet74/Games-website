// The function check if the user name and uaser password emty.
function subClick() {
  //const of user name that user enter.
  const userNameEnter = document.getElementById("userNameEnterId").value;
  //const of password that user enter.
  const userPasEnter = document.getElementById("userPasEnter").value;

  // Check if the input empty.
  if (userNameEnter == "" || userPasEnter == "") {
  // Check if the user name enter input empty. 
    if (userNameEnter == "") {
      // make the input of user name backgroun red.
      document.getElementById("userNameEnterId").style.backgroundColor = "red";
    } else {
     // make the input of user name backgroun opacity.
      document.getElementById("userNameEnterId").style.backgroundColor =
        "transparent";
    }
    //Check if the user password enter enpty.
    if (userPasEnter == "") {
      // make the input of user password backgroun red.
      document.getElementById("userPasEnter").style.backgroundColor = "red";
    } else {
      // make the input of user password backgroun opacity.
      document.getElementById("userPasEnter").style.backgroundColor =
        "transparent";
    }
  }
  // If the inputs not empty
  else {
    // make the input of user name backgroun opacity.
    document.getElementById("userNameEnterId").style.backgroundColor =
      "transparent";
      // make the input of user password backgroun opacity.
    document.getElementById("userPasEnter").style.backgroundColor =
      "transparent";
      // const of all users in the local storege. 
    let userNameFromLocal = JSON.parse(localStorage.getItem("users"));
    console.log(userNameFromLocal);
    if(!userNameFromLocal){
      userNameFromLocal = {};
    }
// Check if the user name enter in the local storege (if singed up).
    if (userNameEnter in userNameFromLocal) {
      // const of password of this user.
      const userPasFromLocal = userNameFromLocal[userNameEnter]["userPas"];
      console.log(userPasFromLocal);
      // Check if the password is true.
      if (userPasEnter === userPasFromLocal) {
        console.log(userPasFromLocal);
        // Save in local storege in userName the name of uesr.
        localStorage.setItem('helloUser', userNameEnter)
      // If the name not exist.
      } else {
        // Make the user password input backgroud red.
        document.getElementById("userPasEnter").style.backgroundColor = "red";
        // Make the value of user password input empty.
        document.getElementById("userPasEnter").value = "";
        // Make the placeholder user password input say the pass is falls.
        document.getElementById("userPasEnter").placeholder = "Your User pass is falls";
        
        console.log(userPasFromLocal);
      }
    }
    else{
      // Make the user name input backgroud red.
        document.getElementById("userNameEnterId").style.backgroundColor = "red";
        // Make the value of user name input empty.
        document.getElementById("userNameEnterId").value = "";
         // Make the value of user password input empty.
        document.getElementById("userPasEnter").value = "";
        // Make the placeholder user name input say the pass is falls.
        document.getElementById("userNameEnterId").placeholder = "Your User Name undifin";
        alert('This name is not in the system. Go sign up.')

    }
  }
}
