// Global Variables
var painted;
var content;
var winningSquare;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;

//Instanciate Arrays
window.onload=function(){
  painted = new Array();
  winningSquare = Math.floor((Math.random()*36)+1);;

  for(var l = 0; l <= 35; l++){
    painted[l] = false;
  }
}


// Game Functions
function canvasClicked(canvasNumber){
        theCanvas = "canvas"+canvasNumber;
        c = document.getElementById(theCanvas);
        cxt = c.getContext("2d");

        if(canvasNumber == winningSquare){
          cxt.rect(0,0,200,200);
          cxt.fillStyle="blue";
          cxt.fill();
          alert("YOU WON!!!");
          playAgain();
        }
        else{
          if(painted[canvasNumber-1] ==false){
            turn++;
            painted[canvasNumber-1] = true;
            cxt.rect(0,0,200,200);
            cxt.fillStyle=checkDistance(canvasNumber);
            cxt.fill();
            $(".guessesleft").html("Guesses Remaining : " + (5-turn));

            if(turn == 5){
              alert("YOU LOSE!");
              playAgain();
            }
          }
          else{
            alert("Already Guessed Here!!!  Pick a Different Spot!");
          }
        }
}

function playAgain(){
        y=confirm("PLAY AGAIN?");
        if(y==true){
          location.reload(true);
        }
        else{
          alert("FINE THEN!");
        }
}

function checkDistance(canvasNumber){
  var divguess = Math.floor((canvasNumber-1)/6);
  if(canvasNumber % 6 == 0){
    var remguess = 6;
  }
  else{
    var remguess = canvasNumber % 6;
  }
  var divwinner = Math.floor((winningSquare-1)/6);
  if(winningSquare % 6 == 0){
    var remwinner = 6;
  }
  else{
    var remwinner = winningSquare % 6;
  }
  var absdiv = Math.abs(divguess - divwinner);
  var absrem = Math.abs(remguess - remwinner);
  var color = Math.max(absdiv, absrem);
  switch(color){
    case 1:
      return "#00FF00"
    break;

    case 2:
      return "#7FFF00"
    break;

    case 3:
      return "#FFFF00"

    break;

    case 4:
      return "#ff7f00"
    break;

    case 5:
      return "#FF0000"
    break;

    default:
      return "black"
  }
}


