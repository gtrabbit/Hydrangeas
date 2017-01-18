// mute = &#128263; &#128263;
// sound on = &#128266; 
//https://dl.dropboxusercontent.com/s/9i8pogwb5og6ef7/error.mp3?dl=0
//https://dl.dropboxusercontent.com/s/de60sz7axs0nnmv/you_lose.mp3?dl=0
//https://dl.dropboxusercontent.com/s/a0wywgup6f4w4ua/you_win.mp3?dl=0

eval=false;
var plays = [];
var errors;
var rep = [];
var fresh = true;
var volume = document.getElementById("volume");
var chime1 = document.getElementById("chime1");
var chime2 = document.getElementById("chime2");
var chime3 = document.getElementById("chime3");
var chime4 = document.getElementById("chime4");
var errorSound = document.getElementById("error");
var youWin = document.getElementById("youwin");
var youLose = document.getElementById("youlose");

var yel = document.getElementById("yellow");
var grn = document.getElementById("green");
var red = document.getElementById("red");
var blu = document.getElementById("blue");
var vol = true;



  blu.addEventListener("click", function() {
  if (eval){
    rep.push(0);
    playBlue();
    evaluate();}
});
  grn.addEventListener("click", function() {
  if (eval){
    rep.push(1);
    playGreen();
    evaluate();}
});
  red.addEventListener("click", function() {
  if (eval){
    rep.push(2);
    playRed();
    evaluate();}
});
  yel.addEventListener("click", function() {
  if (eval){
    rep.push(3);
    playYellow();
    evaluate();}
});
  



volume.addEventListener("click", function() {
  if (vol) {
    vol = !vol;
    this.src = "http://files.softicons.com/download/system-icons/web0.2ama-icons-by-chrfb/png/32x32/Sound%20-%20Mute.png";
  } else {
    this.src = "http://files.softicons.com/download/system-icons/web0.2ama-icons-by-chrfb/png/32x32/Sound%20-%20On3.png";
    vol = !vol;
  }
});

function playBlue() {
  if (vol) {
    chime3.cloneNode(true).play();
    }
  blu.style.backgroundColor = "rgba(73,93,285,.5)";
  setTimeout(function() {
    blu.style.backgroundColor = "white";
  }, 600);
}

function playYellow(){
  if (vol) {
    chime4.cloneNode(true).play();
  }
  yel.style.backgroundColor = "rgba(235,209,81,.5)";
  setTimeout(function() {
    yel.style.backgroundColor = "white";
  }, 600);
}

function playRed(){
  if (vol) {
    chime2.cloneNode(true).play();
  }
  red.style.backgroundColor = "rgba(235,61,74,.5)";
  setTimeout(function() {
    red.style.backgroundColor = "white";
  }, 600);
}

function playGreen(){
  if (vol) {
    chime1.cloneNode(true).play();
  }
  grn.style.backgroundColor = "rgba(102,174,79,.5)";
  setTimeout(function() {
    grn.style.backgroundColor = "white";
  }, 600);
}

var startBut = document.getElementById("startButton");
startBut.addEventListener("click", function() {
  start();
});


function restart() {
 document.getElementById("difset").style.visibility = "visible";
 document.getElementById("difTitle").style.visibility = "visible";
 document.getElementById("lives").textContent = "";
 plays= [];
 eval = false;
 rep = [];
 yel.style.border = "solid rgba(235,209,81,.2) 5px";
 blu.style.border = "solid rgba(73,93,285,.1) 5px";
 red.style.border = "solid rgba(235,61,74,.1) 5px";
 grn.style.border = "solid rgba(102,174,79,.1) 5px";
 document.getElementById("steps").textContent = '';
}

function error(){
  yel.style.border = "solid rgba(240,0,0,.52) 5px";
  blu.style.border = "solid rgba(240,0,0,.52) 5px";
  red.style.border = "solid rgba(240,0,0,.52) 5px";
  grn.style.border = "solid rgba(240,0,0,.52) 5px";

  errors--;
  switch (errors){
    case 0:
      document.getElementById("lives").innerHTML = "&#128155;"
      startBut.innerHTML = "&#9654;";
      setTimeout(function(){
      yel.style.border = "solid rgba(235,209,81,.2) 5px";
      blu.style.border = "solid rgba(73,93,285,.1) 5px";
      red.style.border = "solid rgba(235,61,74,.1) 5px";
      grn.style.border = "solid rgba(102,174,79,.1) 5px";  
        
      }, 4000)
      
      youLose.play();
      return restart();
      
    case 1:
      errorSound.play();
      document.getElementById("lives").innerHTML = "&#128155;";
      
      break;
      
    case 2:
      errorSound.play();
      document.getElementById("lives").innerHTML = "&#128155; &#128155;";
      break;
     
    default:
      errorSound.play();
      break;
                }
  
  setTimeout(function(){
    return model();
  }, 1500)
  
  
}

function evaluate(){
  yel.style.border = "solid rgba(235,209,81,.2) 5px";
  blu.style.border = "solid rgba(73,93,285,.1) 5px";
  red.style.border = "solid rgba(235,61,74,.1) 5px";
  grn.style.border = "solid rgba(102,174,79,.1) 5px";
  
  eval = true;
  var compares = rep.length-1;
  
  if (compares>-1){
    
    if (plays[compares] !== rep[compares]){
      eval = false;
      return error();
      } else if (rep.length === plays.length){
      eval = false;
      return setTimeout(function(){play();}, 1500);
    }
  }}

function model() {
  yel.style.border = "solid rgba(235,209,81,.06) 5px";
  blu.style.border = "solid rgba(73,93,285,.03) 5px";
  red.style.border = "solid rgba(235,61,74,.03) 5px";
  grn.style.border = "solid rgba(102,174,79,.03) 5px";
  rep.length = 0;
  var i=0;
  var int = window.setInterval(function(){
    if (i>plays.length){
      clearInterval(int);
      return evaluate();
    }
    
    switch (plays[i]) {
        case 0:
          playBlue();
          break;
        case 1:
          playGreen();
          break;
        case 2:
          playRed();
          break;
        case 3:
          playYellow();
          break;
                    }
    i++;
    
  }, 1250);
}

function play() {
  var p = Math.floor((Math.random()) * 4);
  plays.push(p);
  document.getElementById("steps").textContent = plays.length;
  if (plays.length===21){  //isn't 20 a little excessive?
    return win();
  }
  return model();

}

function win(){
  youWin.play();
  //begin stupid animation
  setTimeout(function(){
    var p=false;
    var i=0
    var int1 = window.setInterval(function(){
      if (i>21){
        clearInterval(int1);
      } 
      p=!p;
      i++
      if (p){
       yel.style.border = "solid white 5px";
      } else {      
      yel.style.border = "solid rgba(235,209,81,1) 5px";}
    }, 200)
 },0)
    setTimeout(function(){
      var p=false;
      var i=0;
    var int2 = window.setInterval(function(){
      if (i>21){
        clearInterval(int1);
      } 
      p=!p;
      i++
      if (p){
       blu.style.border = "solid white 5px";
      } else {      
      blu.style.border = "solid rgba(73,93,285,1) 5px";}
    }, 200)
 },60)
     setTimeout(function(){
       var p=false;
       var i=0;
    var int3 = window.setInterval(function(){
      if (i>21){
        clearInterval(int1);
      } 
      p=!p;
      i++
      if (p){
       red.style.border = "solid white 5px";
      } else {      
      red.style.border = "solid rgba(235,61,74,1) 5px";}
    }, 200)
 },120)
     setTimeout(function(){
       var p=false;
       var i=0;
    var int4 = window.setInterval(function(){
      if (i>21){
        clearInterval(int1);
      } 
      p=!p;
      i++
      if (p){
       grn.style.border = "solid white 5px";
      } else {      
      grn.style.border = "solid rgba(102,174,79,1) 5px";}
    }, 200)
 },180)
 
  setTimeout(function(){
    startBut.innerHTML = "&#9654;";
    return restart();
  }, 5000)
  
}

function start() {
  document.getElementById("difset").style.visibility = "hidden";
  document.getElementById("difTitle").style.visibility = "hidden";
  if (fresh) {
    fresh = false;
    startBut.innerHTML = "&#8635;";
    
    document.getElementById("lives").style.visibility = "visible";
    switch (document.querySelector("input[name='difficulty']:checked").value) {
      case "Easy":
        errors = -1;
        document.getElementById("lives").innerHTML = "&#8734";
        break;
      case "Medium":
        errors = 3;
        
        document.getElementById("lives").innerHTML = "&#128155; &#128155; &#128155; ";
        break;
      case "Hard":
        errors = 1;
        document.getElementById("lives").innerHTML = "&#128155;"
        break;
    }
    return play();
  } else {
    startBut.innerHTML = "&#9654;";
    fresh = true;
    return restart();
  }
}