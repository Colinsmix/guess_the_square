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

        if(painted[canvasNumber-1] ==false){
          turn++;
          painted[canvasNumber-1] = true;
          cxt.rect(0,0,200,200);
          cxt.fillStyle="red";
          cxt.fill();
          if(turn == 20){
            alert("YOU LOSE!");
            playAgain();
          }
        }
        else{
          alert("Already Guessed Here!!!  Pick a Different Spot!");
        }
}

function playAgain(){
        y=confirm("PLAY AGAIN?");
        if(y==true){
          alert("OKAY!");
          location.reload(true);
        }
        else{
          alert("FINE THEN!");
        }
}
