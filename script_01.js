"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
//test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Grizabella");
}


/***** FUnktionen 02a ******/ 
// Parametisierung + Datenübergabe von INNEN 

ausgabeNamen();
 
function ausgabeNamen() {
    let firstName = "Bianca";
    console.log("Hallo " + firstName + "!");
}
// console.log(firstName); // ---- stays in Vegas!

/***** Funktionen 02b *****/
// 2b. Parametisierung + Datenübergabevon Aussen

ausgabeNamen2("Bernhard"); // ..args
ausgabeNamen2("Atanas");
ausgabeNamen2("Bianca");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo " + firstName + "!");
}