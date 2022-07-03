//This code is based off the work that Ethan used in apitest.js, I modified this to work with drag and drop
var ret1, ret2, ret3, ret4, ret5;
function printe(word){

	var sub_word = word.substring(10);
	var shuff_word = sub_word.substring(0, sub_word.indexOf(','));
	var str = shuff_word.replace('"', '');
	var final_word = str.substring(0, str.length - 1);

	console.log(word);
	console.log(final_word);
	ret1 = word;

	reveal(final_word);
	printed6(word);

	return '${word}';
}
function printed(word){

	var sub_word = word.substring(10);
	var shuff_word = sub_word.substring(0, sub_word.indexOf(','));
	var str = shuff_word.replace('"', '');
	var final_word = str.substring(0, str.length - 1);

	console.log(word);
	console.log(final_word);
	ret2 = word;

	revealing(final_word);
	printed7(word);

	return '${word}';
}
function printed3(word){

	var sub_word = word.substring(10);
	var shuff_word = sub_word.substring(0, sub_word.indexOf(','));
	var str = shuff_word.replace('"', '');
	var final_word = str.substring(0, str.length - 1);

	console.log(word);
	console.log(final_word);
	ret3 = word;

	reveal3(final_word);
	printed8(word);

	return '${word}';
}
function printed4(word){

	var sub_word = word.substring(10);
	var shuff_word = sub_word.substring(0, sub_word.indexOf(','));
	var str = shuff_word.replace('"', '');
	var final_word = str.substring(0, str.length - 1);

	console.log(word);
	console.log(final_word);
	ret4 = word;

	reveal4(final_word);
	printed9(word);

	return '${word}';
}
function printed5(word){

	var sub_word = word.substring(10);
	var shuff_word = sub_word.substring(0, sub_word.indexOf(','));
	var str = shuff_word.replace('"', '');
	var final_word = str.substring(0, str.length - 1);

	console.log(word);
	console.log(final_word);
	ret5 = word;

	reveal5(final_word);
	printed10(word);

	return '${word}';
}
var def1, def2, def3, def4, def5;
function printed6(word){

	var sub_word = word.substring(10);
	var tmp_word = sub_word.substring(sub_word.indexOf(': "'), sub_word.indexOf('}'));
	var stir = tmp_word.replace('"', '');
	stir = stir.replace(':', '');
	var definition = stir.substring(0, stir.length - 1);

	console.log(definition);

	def1 = word;
	reveal6(definition);

	return '${word}';
}
function printed7(word){

	var sub_word = word.substring(10);
	var tmp_word = sub_word.substring(sub_word.indexOf(': "'), sub_word.indexOf('}'));
	var stir = tmp_word.replace('"', '');
	stir = stir.replace(':', '');
	var definition = stir.substring(0, stir.length - 1);

	def2 = word;

	console.log(word);

	reveal7(definition);

	return '${word}';
}
function printed8(word){

	var sub_word = word.substring(10);
	var tmp_word = sub_word.substring(sub_word.indexOf(': "'), sub_word.indexOf('}'));
	var stir = tmp_word.replace('"', '');
	stir = stir.replace(':', '');
	var definition = stir.substring(0, stir.length - 1);

	def3 = word;

	console.log(word);

	reveal8(definition);

	return '${word}';
}
function printed9(word){

	var sub_word = word.substring(10);
	var tmp_word = sub_word.substring(sub_word.indexOf(': "'), sub_word.indexOf('}'));
	var stir = tmp_word.replace('"', '');
	stir = stir.replace(':', '');
	var definition = stir.substring(0, stir.length - 1);

	def4 = word;

	console.log(word);

	reveal9(definition);

	return '${word}';
}
function printed10(word){

	var sub_word = word.substring(10);
	var tmp_word = sub_word.substring(sub_word.indexOf(': "'), sub_word.indexOf('}'));
	var stir = tmp_word.replace('"', '');
	stir = stir.replace(':', '');
	var definition = stir.substring(0, stir.length - 1);

	def5 = word;

	console.log(word);

	reveal10(definition);

	return '${word}';
}
function low_level_word(){
  $.get("/random/0").done(printe);
  $.get("/random/0").done(printed);
  $.get("/random/0").done(printed3);
  $.get("/random/0").done(printed4);
  $.get("/random/0").done(printed5);
}

function middle_level_word(){
  $.get("/random/1").done(printe);
  $.get("/random/1").done(printed);
  $.get("/random/1").done(printed3);
  $.get("/random/1").done(printed4);
  $.get("/random/1").done(printed5);

}

function high_level_word(){
	$.get("/random/2").done(printe);
	$.get("/random/2").done(printed);
	$.get("/random/2").done(printed3);
	$.get("/random/2").done(printed4);
	$.get("/random/2").done(printed5);
}

function reveal(result){
	$("#one")[0].innerHTML = result;
}

function revealing(result){
	$("#two")[0].innerHTML = result;
}

function reveal3(result){
	$("#three")[0].innerHTML = result;
}

function reveal4(result){
	$("#four")[0].innerHTML = result;
}

function reveal5(result){
	$("#five")[0].innerHTML = result;
}

function reveal6(result){
	$("#drag1")[0].innerHTML = result;
}
function reveal7(result){
	$("#drag2")[0].innerHTML = result;
}
function reveal8(result){
	$("#drag3")[0].innerHTML = result;
}
function reveal9(result){
	$("#drag4")[0].innerHTML = result;
}
function reveal10(result){
	$("#drag5")[0].innerHTML = result;
}
function check(word){
	/*if(printe(word) == printe(definition)){
		text.match(/word/);
		console.log("correct");

	}*/

	console.log(printed6.toString());
	console.log(printe.toString());
	if(ret1 == def1 && ret2 == def2 && ret3 == def3 && ret4 == def4 && ret5 == def5){
		alert("Congrats you got it right!");
	}
	else{
		alert("Please try again.");
	}
}
