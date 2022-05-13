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

// ausgabeNamen();
 
// function ausgabeNamen() {
//     let firstName = "Bianca";
//     console.log("Hallo " + firstName + "!");
// }
// console.log(firstName); // ---- stays in Vegas!

/***** Funktionen 02b *****/
// 2b. Parametisierung + Datenübergabevon Aussen

//ausgabeNamen2("Bernhard"); // ..args
//ausgabeNamen2("Atanas");
ausgabeNamen2("Atanas");

function ausgabeNamen2(firstName) { // Parameter
    console.log("What happens in Thailand, stays in Thailand " + firstName + "!");
}

/***** Funktionen 02c *****/
//2c. Mehrere Parameter

// ausgabeNamenParams("Maxine","Mützerich");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

function ausgabeNamenParams(firstName,familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!");
    }


/***** Funktionen 03a *****/
//03a. Vorbereitung
// Postulat: one function = one Job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenParams2("Maxine","Mützerich");

function ausgabeNamenParams2(firstName,familyName) {
    // 1. Job: Composing
    let str = "Hallo " + firstName + " " + familyName + "!";
    //2. Job: output
    console.log(str);
}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten |

output(getString("Maxine","Mützerich"));

// 1. Funktionalität: string composing
function getString(firstName,familyName) {
    let str = "Hallo " + firstName + " " + familyName + "!";
    return str; // return BEENDET eine Funktion!
}

// 2. Funktionalität: data output
// output("Test");
function output(outputData){
    console.log(outputData)
}

// Fazit: Funktionen sind gekapselte, modulare
//        Verantwortlichkeiten!