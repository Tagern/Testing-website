
var elementHello = document.getElementById("hello");
elementHello.style.color = "blue";
elementHello.style.fontSize = "60px";


var name = "Jamie";
var firstLetter = "";

firstLetter = name[3];
console.log(firstLetter);


function argumentTest(test1, test2, test3){
	console.log(test1 - test2 +test3);
}
argumentTest(10,4,2);


// return function holds the answer from the function
var sameScope = "Bear";

function scope(){
	var sameScope = "monkey";
	return sameScope;
}

console.log(scope());


// Showing that a variable can be affected by the return value outside of the function
var returnExample = 0;

function returnEdited(number){
	return number * 2;
}

returnExample = returnEdited(10);
console.log(returnExample);

function returnEdited2(number){
	return number / 2;
}

returnExample = returnEdited2(10);
console.log(returnExample);


// Switch statement
function switchTest(value){
	switch(value){
		case 1:
			return "number 1";
			break;
		case 2:
			return "number 2";
			break;
		case 3:
			return "number 3";
			break;
		case 4:
			return "number 4";
			break;
	}
}
switchTest(1);

// exits function after calling return value

var returnTest;

function returnExit(){
	console.log("Bad mix");
	var wonderMan = "1337";
	var wonderWoman = "Yo";
	return[wonderMan, wonderWoman];
	console.log("WILL THIS SHOW!?")
}

returnTest = returnExit();

console.log(returnTest[0]);

//JSON

var myOeJson = [
	{
		"name": "Jamie Millman",
		"age": 24,
		"favourite_anime": "FMA Brotherhood",
		"favourite_word": "arooo",
		"friends":["Jemma", "Tk", "Spray"]
	}
];

console.log(myOeJson[0].friends[1])

//for loop pushing into empty array

var exampleArray = [];

for(i=0; i<10; i++){
	exampleArray.push(i);
}

console.log(exampleArray);


//adding numbers in array with for loop

var arrayTotal = 0;

var numberArray = [10,20,30,40,50];

for(i=0; i<numberArray.length; i++){
	arrayTotal += numberArray[i];
}
console.log(arrayTotal);


// cycling through an array within an array with a for loop

var total = 0;

function addingArray(array){
	for(i=0; i<array.length; i++){
		for(j=0; j<array[i].length; j++){
			total += array[i][j];
		}
	}
}
addingArray([[1],[2],[3]]);

console.log(total);


// Cycle through array and object to check for specific things

var answer = "";
var people = [
{
	"firstName": "Jamie",
	"lastName": "Millman",
	"favouriteAnime": "Brotherhood",
	"favouriteFilm": "Memento",
	"partner": "Jemma Mix"
},
{
	"firstName": "Jemma",
	"lastName": "Ktorou",
	"favouriteAnime": "One Piece",
	"favouriteFilm": "Beauty and the Beast",
	"partner": "Jamie Mix"
}];

function lookForAttributes(lastName, prop){
	for(i=0; i<people.length; i++){
		if(people[i].lastName === lastName){
			if(people[i].hasOwnProperty(prop)){
				return people[i][prop];
			}
			else{
				return "That person doesn't have that trait";
			}
		}
	}
	return "That person doesn't exist";
}


answer = lookForAttributes("Ktorou", "favouriteAnime");
console.log(answer);



/////////////////////////////////////////////////////
////////////////////  jQuery ////////////////////////
/////////////////////////////////////////////////////

$(document).ready(function(){

});


  
