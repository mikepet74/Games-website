


function btnOnClick() {
  const userName = document.querySelector("#userName").value;
  const userPas = document.querySelector("#userPas").value;
  const userFullName = document.querySelector("#userFullName").value;
  const userMail = document.querySelector("#userMail").value;
  const aginPas = document.querySelector("#aginPas").value;
  const userObject = {
    userFullName: userFullName,
    userPas: userPas,
    userMail: userMail,
    signUpDate: new Date(),
  };
 
  if (aginPas !== userPas) {
    
      document.getElementById("userPas").value = "";
        document.getElementById("aginPas").value = "";
        document.getElementById("userPas").style.backgroundColor = "red";
        document.getElementById("aginPas").style.backgroundColor = "red";
        document.getElementById("userPas").placeholder = "Your password are not same!";
        document.getElementById("aginPas").placeholder = "Your password are not same!";
    
    } else {
    document.getElementById("userPas").style.backgroundColor =
    "transparent";
    document.getElementById("aginPas").style.backgroundColor =
      "transparent";
    if (userName == "" || userPas == "") {
    } else {
      let users = JSON.parse(localStorage.getItem("users"));
      if (!users) {
        users = {};
      }
     
      if(userName in users){
        document.querySelector("#userName").value = '';
        document.querySelector("#userName").placeholder = 'user name is not available';
        alert('user name is not available')
      }
     else{
      users[userName] = userObject;
      localStorage.setItem("users", JSON.stringify(users));
     }
    }
  }
}
