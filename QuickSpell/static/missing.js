var input = "";
var missing = "_";
var letter = "a";
var guesses = 0;
var guessed_letters = "";
var pos = 0;
document.addEventListener('keyup', logKey);

function load_game() {
  
  word = "Dashawn";

  pos = Math.floor(Math.random()*word.length);

  missing = word[pos];
  
 start();

}

function start(){
guesses = 0;
guessed_letter= "";
input = word.substr(0, pos) + '_' + word.substr(pos + 1;
}

function logKey(e){

var r = e.code;

if(r == missing)
correct();
}
else
incorrect(r);
}

function correct(){


input = word.substr(0,pos) + r.toLowerCase() + word.substr(index+1);
alert("Correct!");

load_game();
}

function incorrect(){

input = word.substr(0,pos) + r.toLowerCase() + word.substr(index+1);
alert("Incorrect!");
start();
};

load_game();

}
