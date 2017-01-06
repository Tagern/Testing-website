
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
