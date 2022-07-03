var word="excalibur";

var picture = 0;
var wordbox = 0;

var guessed_letters = " ";
var guesses = 0;

var svgns="http://www.w3.org/2000/svg";


function draw_head()
{
var guessed_letters = "";
var guesses = 0;
var picture = 0;
var wordbox = 0;
var svgns="http://www.w3.org/2000/svg";

var wordList = ["basketball", "football", "soccer", "computer", "marmorstein", "rhythm",
                "homework", "schematic", "programming", "headphones", "melody", "piano",
                "debug", "baseball", "exam", "tutor", "javascript", "python", "html", "java"];

function category(){
    if(word == "basketball" || word == "football" || word == "soccer" || word == "baseball"){
        alert("Your category is: Sports");
    }else if(word == "computer" || word == "schematic" || word == "programming" || word == "phone"){
        alert("Your category is: Technology");
    }else if(word == "homework" || word == "marmorstein" || word == "exam" || word == "tutor"){
        alert("Your category is: School");
    }else if(word == "rhythm" || word == "headphones" || word == "melody" || word == "piano"){
        alert("Your category is: Music"); 
    }else if(word == "javascript" || word == "python" || word == "html" || word == "java"){
        alert("Your category is: Programming languages");
    }   
}

function draw_head() {
  var head = document.createElementNS(svgns, "circle");
  head.setAttributeNS(null, "r", "30");
  head.setAttributeNS(null, "cx", "80");
  head.setAttributeNS(null, "cy", "80");
  head.setAttributeNS(null, "fill", "none");
  head.setAttributeNS(null, "stroke", "black");
  head.setAttributeNS(null, "stroke-width", "4px");
  picture.appendChild(head);


}

function draw_torso()
{
}

function draw_torso() {
  var torso = document.createElementNS(svgns, "rect");
  torso.setAttributeNS(null, "width", "4px");
  torso.setAttributeNS(null, "height", "80px");
  torso.setAttributeNS(null, "x", "78");
  torso.setAttributeNS(null, "y", "110");
  torso.setAttributeNS(null, "fill", "black");
  picture.appendChild(torso);

}

function draw_arm(side)
{
function draw_arm(side) {
  var arm = document.createElementNS(svgns, "line");
  arm.setAttributeNS(null, "stroke", "black");
  arm.setAttributeNS(null, "stroke-width", "2px");
  arm.setAttributeNS(null, "fill", "none");
  arm.setAttributeNS(null, "x1", "80");
  arm.setAttributeNS(null, "y1", "130");

  arm.setAttributeNS(null, "y2", "120");
  if(side== "left"){
    arm.setAttributeNS(null, "x2", "48");
  }
  else{
    arm.setAttributeNS(null, "x2", "108");
  }
  picture.appendChild(arm);

}

function draw_leg(side)
{
  arm.setAttributeNS(null, "y2", "120");
  if(side == "left") {
    arm.setAttributeNS(null, "x2", "48");
  }
  else {
    arm.setAttributeNS(null, "x2", "108");
  }
  picture.appendChild(arm);
}

function draw_leg(side) {
  var leg = document.createElementNS(svgns, "line");
  leg.setAttributeNS(null, "stroke", "black");
  leg.setAttributeNS(null, "stroke-width", "2px");
  leg.setAttributeNS(null, "fill", "none");
  leg.setAttributeNS(null, "x1", "78");
  leg.setAttributeNS(null, "y1", "190");

  leg.setAttributeNS(null, "y2", "250");
  if(side=="left"){
   leg.setAttributeNS(null, "x2", "40");
  }
  else{
    leg.setAttributeNS(null, "x2", "65");
  leg.setAttributeNS(null, "x1", "80");
  leg.setAttributeNS(null, "y1", "190");
  leg.setAttributeNS(null, "y2", "190");
  if(side == "left") {
    leg.setAttributeNS(null, "x2", "48");
  }
  else {
    leg.setAttributeNS(null, "x2", "108");
  }
  picture.appendChild(leg);
}


function right_eyes()
{
  var eyes = document.createElementNS(svgns, "circle");
  eyes.setAttributeNS(null, "r", "5");
  eyes.setAttributeNS(null, "cx", "70");
  eyes.setAttributeNS(null, "cy", "70");
  eyes.setAttributeNS(null, "fill", "none");
  eyes.setAttributeNS(null, "stroke", "black");
  eyes.setAttributeNS(null, "stroke-width", "4px");
  picture.appendChild(eyes);

} 

function left_eyes()
{
  var eyes = document.createElementNS(svgns, "circle");
  eyes.setAttributeNS(null, "r", "5");
  eyes.setAttributeNS(null, "cx", "90");
  eyes.setAttributeNS(null, "cy", "70");
  eyes.setAttributeNS(null, "fill", "none");
  eyes.setAttributeNS(null, "stroke", "black");
  eyes.setAttributeNS(null, "stroke-width", "4px");
  picture.appendChild(eyes);
  document.body.style.backgroundColor = "darksalmon";

} 

function draw_nose()
{
  var nose = document.createElementNS(svgns, "circle");
  nose.setAttributeNS(null, "r", "2");
  nose.setAttributeNS(null, "cx", "80");
  nose.setAttributeNS(null, "cy", "81");
  nose.setAttributeNS(null, "fill", "none");
  nose.setAttributeNS(null, "stroke", "black");
  nose.setAttributeNS(null, "stroke-width", "3px");
  picture.appendChild(nose);

} 




function draw_mouth()
{
  var mouth = document.createElementNS(svgns, "circle");
  mouth.setAttributeNS(null, "r", "10");
  mouth.setAttributeNS(null, "cx", "80");
  mouth.setAttributeNS(null, "cy", "96");
  mouth.setAttributeNS(null, "fill", "none");
  mouth.setAttributeNS(null, "stroke", "black");
  mouth.setAttributeNS(null, "stroke-width", "3px");
  picture.appendChild(mouth);

} 





function draw_next_body_part()
{

function draw_eyes() {
  var eyes = document.createElementNS(svgns, "circle");
  eyes.setAttributeNS(null, "fill", "none");
  eyes.setAttributeNS(null, "stroke", "black");
  eyes.setAttributeNS(null, "stroke-width", "1px");
  eyes.setAttributeNS(null, "r", "3");
  eyes.setAttributeNS(null, "cx", "70");
  eyes.setAttributeNS(null, "cy", "70");
  picture.appendChild(eyes);
}

function draw_reyes() {
  var reyes = document.createElementNS(svgns, "circle");
  reyes.setAttributeNS(null, "fill", "none");
  reyes.setAttributeNS(null, "stroke", "black");
  reyes.setAttributeNS(null, "stroke-width", "1px");
  reyes.setAttributeNS(null, "r", "3");
  reyes.setAttributeNS(null, "cx", "90");
  reyes.setAttributeNS(null, "cy", "70");
  picture.appendChild(reyes);
}

function draw_mouth() {
  var mouth = document.createElementNS(svgns, "circle");
  mouth.setAttributeNS(null, "r", "6");
  mouth.setAttributeNS(null, "cx", "80");
  mouth.setAttributeNS(null, "cy", "95");
  mouth.setAttributeNS(null, "fill", "none");
  mouth.setAttributeNS(null, "stroke", "red");
  mouth.setAttributeNS(null, "stroke-width", "3px");
  picture.appendChild(mouth);
}

function draw_nose() {
  var nose = document.createElementNS(svgns, "rect");
  nose.setAttributeNS(null, "width", "4px");
  nose.setAttributeNS(null, "height", "4px");
  nose.setAttributeNS(null, "x", "78");
  nose.setAttributeNS(null, "y", "80");
  nose.setAttributeNS(null, "fill", "black");
  picture.appendChild(nose);

}

function draw_next_body_part() {
  if(guesses == 0)
  {
    draw_head();
  }
  else if(guesses == 1)
  {
    draw_torso();
  }
  else if(guesses == 2)
  {
    draw_arm("left");
  }
  else if (guesses == 3)
  {
    draw_arm("right");
  }
  else if (guesses == 4)
  {
    draw_leg("left");
  }
  else if (guesses == 5)
  {
    draw_leg("right");
  }
  else if (guesses == 6)
  {
    right_eyes();
  }
  else if (guesses == 7)
  {
    left_eyes();
  }
  else if(guesses == 8)
  {
    draw_nose();
  }
  else if (guesses == 9)
  {
    draw_mouth();
  }
}


function check_win()
{
  if(guesses > 10)
    return false;
  for(i=0; i < word.length; ++i) {
    if( guessed_letters.includes(word[i]) == false)
  if(guesses == 3)
  {
    draw_arm("right");
  }
 else if(guesses == 4)
  {
    draw_leg("left");
  }
  else if(guesses == 5)
  {
    draw_leg("right");
  }
 else if(guesses == 6)
  {
    draw_eyes();
  }
  else if(guesses == 7)
  {
    draw_reyes();
  }
 else if(guesses == 8)
  {
    draw_nose();
  }
 else if(guesses == 9)
  {
    draw_mouth();
  }


}

function check_win() {
  if(guesses > 10)
    return false;
  for(i=0; i < word.length; ++i) {
    if(guessed_letters.includes(word[i]) == false)
      return false;
  }
  return true;
}


function draw_letter(i) {
  var letter = word[i];
  var letterNode = document.createTextNode(letter);
  var letterBox = document.createElement("div");
  letterBox.appendChild(letterNode);
  letterBox.setAttribute("class", "guessedletter");
  x = 20 + 80*i - word.length*80;
  letterBox.style.transform = "translate(" + x + "px, -40px)";
  wordbox.appendChild(letterBox);
}
 function update_guessed_letters(letter)
 {
   guessed_letters += letter;
   var letNode = document.createTextNode(letter + " ");
   var guess_box = document.getElementById("letters");
   guess_box.appendChild(letNode);
 }

function draw_word()
{
  for( i=0; i< word.length; ++i) {
  x = 20 + 80 * i-word.length*80;
  letterBox.style.transform = "translate(" + x + "px, -40px)";
  wordbox.appendChild(letterBox);
}

function update_guessed_letters(letter) {
  guessed_letters += letter;

  var letNode = document.createTextNode(letter + " ");
  var guess_box = document.getElementById("letters");
  guess_box.appendChild(letNode);
}

function draw_word() {
  for(i=0; i < word.length; ++i) {
    var image = document.createElement("img");
    image.src = "Tile.png";
    wordbox.appendChild(image);
  }
}
 function handle_guess(event)
 {
   var letter = String.fromCharCode(event.which);
   if(guessed_letters.includes(letter))
     return;
   update_guessed_letters(letter);
   var found = false;
   for (i=0; i < word.length; ++i) {
     if (letter == word[i]) {
       found = true;
       draw_letter(i);
     }
   }

   if(found != true) {
     if(guesses >= 10){
       alert("You're hung! Reload to play again.")
     }
     else{
       draw_next_body_part();
       ++guesses;
     }
   }

   if(check_win()) {
     alert("Congratulation! You win!");
   }
 }


function handle_guess(event) {
  var letter = String.fromCharCode(event.which);
  if(guessed_letters.includes(letter))
    return;
  update_guessed_letters(letter);

  var found = false;
  for(i=0; i < word.length; ++i) {
    if(letter == word[i]) {
      found = true;
      draw_letter(i);
    }
  }

  if(found != true) {
    if(guesses >= 10) {
      alert("You're hung! Reload to play again.")
    }
    else {
      draw_next_body_part();
      ++guesses;
    }
  }

  if(check_win()) {
    alert("Congratulation! You win!");
  }
}

function load_game() {
  picture = document.getElementById("gallows");
  wordbox = document.getElementById("contents");
  category();
  draw_word();
  document.body.addEventListener("keypress", handle_guess);
}
