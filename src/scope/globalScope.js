// variables

var a; // declarando

var b = 'b'; // declarar y asignar


b = "bb"; // reasignacion

var a = "aa"; // redeclaracion



// Global Scope
var fruit = "Apple";// global

function bestFruit() {
	console.log(`The fruit is: ${fruit}`);
}

bestFruit();


function countries() {
	pais = "colombia"; // esto esta mal, es global
	console.log(pais);
}


countries()
console.log(pais);
