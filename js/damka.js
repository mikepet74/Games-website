window.onload = function () {

  const hlloUserFromLocal = localStorage.getItem("helloUser");
  if (!hlloUserFromLocal) {
    document.getElementById("userSpan").innerHTML = "Guest";
  } else {
    document.getElementById("userSpan").innerHTML = hlloUserFromLocal;
  }

  startGame();
};
let check = 0;
let ta;
let tk;
let n;
let tr;
let ts = 0;
let player;
let redEat = 0;
let blackEat = 0;






function startGame() {
  document.querySelector("#bord").innerHTML = "";
  let counter = 2;
  let count = 1;
  for (let i = 0; i < 4; i++) {
    for (let g = 0; g < 4; g++) {
      document.querySelector("#bord").innerHTML += `<div id="s${count}" class="a"> </div>`;
      document.querySelector("#bord").innerHTML += `<div id="s${counter}" class="b a center" onclick="test(${counter})"></div>`;
      counter += 2;
      count += 2;
    }
    for (let v = 0; v < 4; v++) {
      document.querySelector("#bord").innerHTML += `<div id="s${count}" class="a b center" onclick="test(${count})"></div>`;

      document.querySelector("#bord").innerHTML += `<div id="s${counter}" class="a">  </div>`;
      counter += 2;
      count += 2;
    }
  }
  solid();
  redEat = 0;
  blackEat = 0;
}

function solid() {
  let red = 2;
  for (let t = 0; t < 4; t++) {
    document.querySelector(`#s${red}`).innerHTML += `<div class="center red" id="r${t + 1}">  </div>`;
    red += 2;
  }
  red -= 1;
  for (let t = 4; t < 8; t++) {
    document.querySelector(`#s${red}`).innerHTML += `<div class="center red" id="r${t + 1}">  </div>`;
    red += 2;
  }
  red += 1;
  for (let t = 8; t < 12; t++) {
    document.querySelector(`#s${red}`).innerHTML += `<div class="center red" id="r${t + 1}">  </div>`;
    red += 2;
  }

  let black = 64;
  for (let t = 0; t < 4; t++) {
    document.querySelector(`#s${black - 1}`).innerHTML += `<div class="center black" id="b${t + 1}">  </div>`;
    black -= 2;
  }
  black += 1;
  for (let t = 4; t < 8; t++) {
    document.querySelector(`#s${black - 1}`).innerHTML += `<div class="center black" id="b${t + 1}">  </div>`;
    black -= 2;
  }
  black -= 1;
  for (let t = 8; t < 12; t++) {
    document.querySelector(`#s${black - 1}`).innerHTML += `<div class="center black" id="b${t + 1}">  </div>`;
    black -= 2;
  }
}



/*
 check= אם יש שחקן תפוס
 t= פרמטר של הפונקציה 
 n= מיקום (id) השחקן
 tk= מכיל את השחקן
 tr= המיקום שאליו השחקן יעבור
 ts= את מיקום השחקן
*/


function test(t) {
  if (check == 0) {
    if (document.querySelector(`#s${t}`).innerHTML) {
      n = t;
      tk = document.querySelector(`#s${t}`).innerHTML;
      ts = document.querySelector(`#s${t}`);
      check = 1;
    }
  }
  else if (check != 0) {
    check = 0;
    tr = t;
    if (tk) {
      for (let i = 1; i <= 12; i++) {
        if (tk == `<div class="center red" id="r${i}">  </div>`) {
          if (player != "red") {
            player = "red";
            if (tr - n == 7 || tr - n == 9) {
              if (!document.querySelector(`#s${tr}`).innerHTML) {
                ts.innerHTML = "";
                document.querySelector(`#s${t}`).innerHTML = tk;
                tk = "";
              }
              else if (document.querySelector(`#s${tr}`).innerHTML) {
                for (let p = 1; p <= 12; p++) {
                  if (document.querySelector(`#s${tr}`).innerHTML == `<div class="center black" id="b${p}">  </div>`) {
                    if (tr - n == 7) {
                      if (!document.querySelector(`#s${tr + 7}`).innerHTML) {
                        ts.innerHTML = "";
                        document.querySelector(`#s${t + 7}`).innerHTML = tk;
                        tk = "";
                        document.querySelector(`#s${t}`).innerHTML = "";
                      }
                    }
                    else if (tr - n == 9) {
                      if (!document.querySelector(`#s${tr + 9}`).innerHTML) {
                        ts.innerHTML = "";
                        document.querySelector(`#s${t + 9}`).innerHTML = tk;
                        tk = "";
                        document.querySelector(`#s${t}`).innerHTML = "";
                      }
                    }
                    redEat++;
                    document.querySelector("#points_red").innerHTML = redEat;
                  }
                }
              }
            }
            else {
              document.querySelector(`#s${n}`).innerHTML = tk;
            }
            setTimeout(() => (document.querySelector("#bord").className = "blackBord"), 1000);
          }
          else {
            alert("תור השחקן השחור");
          }
        }
        else if (tk == `<div class="center black" id="b${i}">  </div>`) {
          if (player != "black") {
            player = "black";
            if (n - tr == 7 || n - tr == 9) {
              if (!document.querySelector(`#s${tr}`).innerHTML) {
                ts.innerHTML = "";
                document.querySelector(`#s${t}`).innerHTML = tk;
                tk = "";
              }
              else if (document.querySelector(`#s${tr}`).innerHTML) {
                for (let p = 1; p <= 12; p++) {
                  if (document.querySelector(`#s${tr}`).innerHTML == `<div class="center red" id="r${p}">  </div>`) {
                    if (n - tr == 7) {
                      if (!document.querySelector(`#s${tr - 7}`).innerHTML) {
                        ts.innerHTML = "";
                        document.querySelector(`#s${t - 7}`).innerHTML = tk;
                        tk = "";
                        document.querySelector(`#s${t}`).innerHTML = "";
                      }
                    }
                    else if (n - tr == 9) {
                      if (!document.querySelector(`#s${tr - 9}`).innerHTML) {
                        ts.innerHTML = "";
                        document.querySelector(`#s${t - 9}`).innerHTML = tk;
                        tk = "";
                        document.querySelector(`#s${t}`).innerHTML = "";
                      }
                    }
                    blackEat++;
                    document.querySelector("#points_black").innerHTML =
                      blackEat;
                  }
                }
              }
              else {
                document.querySelector(`#s${n}`).innerHTML = tk;
              }
            }

            setTimeout(() => (document.querySelector("#bord").className = "redBord"), 1000);
          }
          else {
            alert("תור השחקן האדום");
          }
        }
      }
    }
    else {
      alert("תפוס כלי");
    }


  }


  if (redEat == 12) {
    alert("האדום ניצח");
  }
  if (blackEat == 12) {
    alert("השחור ניצח");
  }
}
/*
 check= אם יש שחקן תפוס
 t= פרמטר של הפונקציה 
 n= מיקום (id) השחקן
 tk= מכיל את השחקן
 tr= המיקום שאליו השחקן יעבור
 ts= את מיקום השחקן
*/




