// The function say hello to user with his name or Guest.
window.onload = function or () {
  // get the name of user from local storege.
  const hlloUserFromLocal = localStorage.getItem("helloUser");
  // Check if local storege empty.
  if (!hlloUserFromLocal) {
    // call to user Guest.
    document.getElementById("userSpan").innerHTML = 'Guest';
  } else {
    // call to user with his name.
    document.getElementById("userSpan").innerHTML = hlloUserFromLocal;
  }
};
// Tha funcshin remoov the local storege with name of user when he log out.
function  logOutUser(){
    localStorage.removeItem('helloUser');
}