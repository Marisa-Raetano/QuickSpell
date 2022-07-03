var ret;
function printe(word){

	
	//substring stuff
	var sub_word = word.substring(10);
	var shuff_word = sub_word.substring(0, sub_word.indexOf(','));
	var str = shuff_word.replace('"', '');

	//just the word
	var final_word = str.substring(0, str.length - 1);

	ret = final_word;

	console.log(word);
	console.log(final_word);
	console.log(final_word.shuffle());

	//just the word but scrambled
	var scrambled_word = final_word.shuffle();
	reveal(scrambled_word);

	return '${word}';
}

function check_guess(word){

	let x = document.getElementById("user_input").value;
	if(x == ret){
		console.log("good");
		alert("Correct.");
	}else{
		console.log("bad");
		alert("That is incorrect.");
	}

	return '${word}';
}

function low_level_word(){
	$.get("/random/0").done(printe);
}

function middle_level_word(){
	$.get("/random/1").done(printe);
}

function high_level_word(){
	$.get("/random/2").done(printe);
}



String.prototype.shuffle = function(){
	var a = this.split("");
	var n = a.length;

	for(var i = n - 1; i > 0; i--){
		var j = Math.floor(Math.random() * (i + 1));
		var temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
	return a.join("");
}

function reveal(result){
	$("#picked_word")[0].innerHTML = "Your word: " + result;
}

