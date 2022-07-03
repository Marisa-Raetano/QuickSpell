var elementary_game_one_array = [];

/*
    need to figure out why this always returns the first element inserted into the array
*/

var ran_word = elementary_game_one_array[Math.floor(Math.random() * elementary_game_one_array.length)];

var index = 0;

//inserts 1st word into array
function elementary_game_one_first(){
    var name = document.getElementById('word1').value;

    if(!(typeof name === 'undefined') && name != null && name.trim() != ''){
        if (elementary_game_one_array.includes(name) === false){
            elementary_game_one_array.push(name);
        }else{
            alert("Do not enter duplicate words");
        }
        //elementary_game_one_array.push(name);
    }
    console.log(elementary_game_one_array);
    document.getElementById('word1').value = '';
}

//inserts 2nd word into array
function elementary_game_one_second(){
    var name = document.getElementById('word2').value;

    if(!(typeof name === 'undefined') && name != null && name.trim() != ''){
        if (elementary_game_one_array.includes(name) === false){
            elementary_game_one_array.push(name);
        }else{
            alert("Do not enter duplicate words");
        }
        //elementary_game_one_array.push(name);
    }
    console.log(elementary_game_one_array);
    document.getElementById('word2').value = '';
}

//inserts 3rd word into array
function elementary_game_one_third(){
    var name = document.getElementById('word3').value;

    if(!(typeof name === 'undefined') && name != null && name.trim() != ''){
        if (elementary_game_one_array.includes(name) === false){
            elementary_game_one_array.push(name);
        }else{
            alert("Do not enter duplicate words");
        }
        //elementary_game_one_array.push(name);
    }
    console.log(elementary_game_one_array);
    document.getElementById('word3').value = '';
}

//inserts 4th word into array
function elementary_game_one_fourth(){
    var name = document.getElementById('word4').value;

    if(!(typeof name === 'undefined') && name != null && name.trim() != ''){
        if (elementary_game_one_array.includes(name) === false){
            elementary_game_one_array.push(name);
        }else{
            alert("Do not enter duplicate words");
        }
        //elementary_game_one_array.push(name);
    }
    console.log(elementary_game_one_array);
    document.getElementById('word4').value = '';
}

//let random_word_game_one = Math.floor((Math.random() * elementary_game_one_array.length));

//logs the chosen random word
function pick_random_word(){
    console.log(elementary_game_one_array);
    //console.log(random_word_game_one);

    console.log(ran_word);

    return ran_word;
}




//broken function to have forms submit by pressing enter key on keyboard
// function submitForms(){
//     // document.getElementById('word1').submit();
//     // document.getElementById('word2').submit();
//     // document.getElementById('word3').submit();
//     // document.getElementById('word4').submit();

//     // document.forms["word1"].submit();
//     // document.forms["word2"].submit();
//     // document.forms["word3"].submit();
//     // document.forms["word4"].submit();

//     document.getElementById("elementary_game_one_form").submit();
// }

//displays the random word on the screen
// var display = function (){

//     let ran = elementary_game_one_array[index++ % elementary_game_one_array.length];
//     document.getElementById('randomWord').innerHTML=elementary_game_one_array[random_word_game_one];
// }




//MIDDLE SCHOOL TIMER JS

function updateTimer(){
    var timer;
    timer++;
    $('timer').html(timer);
}

function stop(){
    cancelInterval(timer);
    $('#begin').show();
    $('#stop').hide();
}

function middle_school_game1_timer(){
    var timer = 0;
    timer = setInterval(updateTimer, 1000);
    $('#begin').hide();
    $('#stop').show();
}

//MIDDLE SCHOOL GAME 1

function GameCntl($input, $timeout) {
    $input.clue = "_ar";
    $input.word = "car";
    $input.letter = "c";
    $input.index = 0;
    $input.right = false;
    $input.wrong = false;
    $input.num_correct = 0;
    $input.timeout = 0;
   

    $input.next = function() {

        $input.timeout = 0;

        // Pick a random word
        $input.word = words[Math.floor(Math.random()*words.length)];

        $input.index = Math.floor(Math.random()*$input.word.length);

        $input.letter = $input.word[$input.index];

        $input.resetclue();
    };

    $input.resetclue = function() {
        $input.timeout = 0;
        $input.right = false;
        $input.wrong = false;

        $input.clue = $input.word.substr(0, $input.index) + '_'
        + $input.word.substr($input.index + 1);

    };

    $input.keyup = function(e) {
        // If they already got it right, ignore input
        if($input.right) {
            return;
        }

        c = String.fromCharCode(e.keyCode);

        // Ignore key presses outside of A-Z
        if(c < 'A' || c > 'Z') {
            return;
        }

        if(c == $input.letter.toUpperCase()) {
            $input.correct();
        } else if(c == ' ') {
            $input.next();
        } else {
            $input.incorrect(c);
        }
    };

    $input.correct = function() {

        $input.num_correct += 1;

        $input.right = true;
        $input.wrong = false;

        $input.clue = $input.word.substr(0, $input.index) + $input.letter
        + $input.word.substr($input.index + 1);

        if($input.timeout != 0) {
            $timeout.cancel($input.timeout);
        }
        $input.timeout = $timeout($input.next, 2000);

    };

    $input.incorrect = function(c) {
        $input.right = false;
        $input.wrong = true;

        $input.clue = $input.word.substr(0, $input.index) + c.toLowerCase()
        + $input.word.substr($input.index + 1);

        if($input.timeout != 0) {
            $timeout.cancel($input.timeout);
        }
        $input.timeout = $timeout($input.resetclue, 2000);

    };

    $input.next();
}


/* 

    TODO:
        -separate each game into it's own JS file 
        -fix array bug in word scramble 
*/


//high school hangman

var wordList = ["basketball", "football", "soccer", "computer", "marmorstein", "rhythm", 
                "homework", "schematic", "programming", "headphones", "melody", "piano", 
                "debug", "baseball", "exam", "tutor", "javascript", "python", "html", "java"];

var color = "#b5f5ff"

//https://css-tricks.com/snippets/javascript/select-random-item-array/
var word = wordList[Math.floor(Math.random()*wordList.length)];

var guessed_letters = "";
var guesses = 0;
var picture = 0;
var wordbox = 0;

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

function background_color(){
    document.bgColor = color;
}


var svgns = "http://www.w3.org/2000/svg";
function draw_head(){
    var head = document.createElementNS(svgns, "circle");
    head.setAttributeNS(null, "r", "30");
    head.setAttributeNS(null, "cx", "80");
    head.setAttributeNS(null, "cy", "80");
    head.setAttributeNS(null, "fill", "none");
    head.setAttributeNS(null, "stroke", "tan");
    head.setAttributeNS(null, "stroke-width", "4px");

    picture.appendChild(head);
    console.log("head");
}

function draw_mouth(){
    var mouth = document.createElementNS(svgns, "circle");
    mouth.setAttributeNS(null, "r", "9");
    mouth.setAttributeNS(null, "cx", "80");
    mouth.setAttributeNS(null, "cy", "95");
    mouth.setAttributeNS(null, "fill", "none");
    mouth.setAttributeNS(null, "stroke", "black");
    mouth.setAttributeNS(null, "stroke-width", "3px");

    picture.appendChild(mouth);
    console.log("mouth");
}

function draw_left_eye(){
    var left_eye = document.createElementNS(svgns, "circle");
    left_eye.setAttributeNS(null, "r", "3");
    left_eye.setAttributeNS(null, "cx", "65");
    left_eye.setAttributeNS(null, "cy", "73");
    left_eye.setAttributeNS(null, "fill", "blue");
    left_eye.setAttributeNS(null, "stroke", "blue");
    left_eye.setAttributeNS(null, "stroke-width", "2px");

    picture.appendChild(left_eye);
    console.log("left_eye");
}

function draw_right_eye(){
    var right_eye = document.createElementNS(svgns, "circle");
    right_eye.setAttributeNS(null, "r", "3");
    right_eye.setAttributeNS(null, "cx", "95");
    right_eye.setAttributeNS(null, "cy", "73");
    right_eye.setAttributeNS(null, "fill", "blue");
    right_eye.setAttributeNS(null, "stroke", "blue");
    right_eye.setAttributeNS(null, "stroke-width", "2px");

    picture.appendChild(right_eye);
    console.log("right_eye");
}

function draw_right_ear(){
    var right_ear = document.createElementNS(svgns, "circle");
    right_ear.setAttributeNS(null, "r", "4");
    right_ear.setAttributeNS(null, "cx", "112");
    right_ear.setAttributeNS(null, "cy", "73");
    right_ear.setAttributeNS(null, "fill", "tan");
    right_ear.setAttributeNS(null, "stroke", "tan");
    right_ear.setAttributeNS(null, "stroke-width", "2px");

    picture.appendChild(right_ear);
    console.log("right_ear");
}

function draw_left_ear(){
    var left_ear = document.createElementNS(svgns, "circle");
    left_ear.setAttributeNS(null, "r", "4");
    left_ear.setAttributeNS(null, "cx", "48");
    left_ear.setAttributeNS(null, "cy", "73");
    left_ear.setAttributeNS(null, "fill", "tan");
    left_ear.setAttributeNS(null, "stroke", "tan");
    left_ear.setAttributeNS(null, "stroke-width", "2px");

    picture.appendChild(left_ear);
    console.log("left_ear");
}

function draw_nose(){
    var nose = document.createElementNS(svgns, "circle");
    nose.setAttributeNS(null, "r", "1");
    nose.setAttributeNS(null, "cx", "80");
    nose.setAttributeNS(null, "cy", "80");
    nose.setAttributeNS(null, "fill", "black");
    nose.setAttributeNS(null, "stroke", "black");
    nose.setAttributeNS(null, "stroke-width", "4px");

    picture.appendChild(nose);
    console.log("nose");
}

function draw_torso(){
    var torso = document.createElementNS(svgns, "rect");
    torso.setAttributeNS(null, "width", "4px");
    torso.setAttributeNS(null, "height", "80px");
    torso.setAttributeNS(null, "x", "80");
    torso.setAttributeNS(null, "y", "110");
    torso.setAttributeNS(null, "fill", "maroon");
    torso.setAttributeNS(null, "stroke", "maroon");
    torso.setAttributeNS(null, "stroke-width", "4.2px");

    picture.appendChild(torso);
    console.log("torso");
}

function draw_arm(side){
    var arm = document.createElementNS(svgns, "line");
    arm.setAttributeNS(null, "stroke", "maroon");
    arm.setAttributeNS(null, "stroke-width", "4px");
    arm.setAttributeNS(null, "fill", "none");
    arm.setAttributeNS(null, "x1", "80");
    arm.setAttributeNS(null, "y1", "130");
    arm.setAttributeNS(null, "y2", "120");

    if (side == "left") {
        arm.setAttributeNS(null, "x2", "58");
    } else {
        arm.setAttributeNS(null, "x2", "108");
    }
    picture.appendChild(arm);
    console.log("arm");
}

function draw_leg(side){
    var leg = document.createElementNS(svgns, "line");
    leg.setAttributeNS(null, "stroke", "navy");
    leg.setAttributeNS(null, "stroke-width", "4px");
    leg.setAttributeNS(null, "fill", "none");
    leg.setAttributeNS(null, "x1", "80");
    leg.setAttributeNS(null, "y1", "188");
    leg.setAttributeNS(null, "y2", "218");

    if(side == "left"){
        leg.setAttributeNS(null, "x2", "58");
    }else{
        leg.setAttributeNS(null, "x2", "108");
    }
    picture.appendChild(leg);
    console.log("leg");
}

function draw_next_body_part(){
    if(guesses == 0){
        draw_head();
    }else if(guesses == 1){
        draw_torso();
    }else if(guesses == 2){
        draw_arm("left");
    }else if(guesses == 3){
        draw_arm("right");
    }else if(guesses == 4){
        draw_leg("left");
    }else if(guesses == 5){
        draw_leg("right");
    }else if(guesses == 6){
        draw_mouth();
    }else if(guesses == 7){
        draw_left_eye();
    }else if(guesses == 8){
        draw_right_eye();
    }else if(guesses == 9){
        draw_nose();
    }else if(guesses == 10){
        draw_right_ear();
    }else if(guesses == 11){
        draw_left_ear();
    }
}

function draw_letter(i){
    var letter = word[i];
    var letterNode = document.createTextNode(letter);
    var letterBox = document.createElement("div");
    letterBox.appendChild(letterNode);
    letterBox.setAttribute("class", "guessedletter");
    
    x = 20 + 80*i - word.length*80;
    letterBox.style.transform = "translate(" + x + "px, -40px)";
    wordbox.appendChild(letterBox);
}

function check_win(){
    if(guesses > 10){
        return false;
    }

    for(i = 0; i < word.length; ++i){
        if(guessed_letters.includes(word[i]) == false){
            return false;
        }
    }
    return true;
}

function update_guessed_letters(letter)
{
    guessed_letters += letter;
    var letNode = document.createTextNode(letter + " ");
    var guess_box = document.getElementById("letters");
    guess_box.appendChild(letNode);
}

function draw_word(){
    for (i = 0; i < word.length; ++i) {
        var image = document.createElement("img");
        image.src = "/static/Tile.png";
        wordbox.appendChild(image);
    }
}

function handle_guess(event){
    var letter = String.fromCharCode(event.which);
    if (guessed_letters.includes(letter)){
      return;
    }
    update_guessed_letters(letter);

    var found = false;
    for (i = 0; i < word.length; ++i) {
        if (letter == word[i]) {
            found = true;
            draw_letter(i);
        }
    }

    if(found != true){
        if(guesses == 12){
            alert("You're hung! Reload to play again.");
        }else{
            draw_next_body_part();
            ++guesses;
        }
    }

    if(check_win()){
        alert("Congratulations! You win!");
    }
}   

function load_game(){
    picture = document.getElementById("gallows");
    wordbox = document.getElementById("contents");
    category();
    draw_word();
	background_color();
    document.body.addEventListener("keypress", handle_guess);
}
