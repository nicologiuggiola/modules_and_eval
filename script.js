// fetch("./conf.json").then(res => res.json()).then(executeConf)
// // const value = 5;

// // function myLog(variableToLog, someCode) {
// //     eval(someCode);
// //     console.log(variableToLog);
// // }

// // myLog(value, "variableToLog = '6pippo'; console.log('ti ho fregato!')");

// const fs = require('fs');

// fs.readFile("./conf.json", (err, data) => )

// function executeConf(jsonArray) {
//     for (const element of jsonArray) {
//         let array = element.input;
//         eval(element.code);
//     }
// }

function helper2() {

    function startingUpperCase(string) {
        return string[0].toUpperCase() + string.substring(1);
    }
    
    function splitCamelCase(string) {
        let output = ""
        for (const char of string) {
            if (char === char.toUpperCase()) {
                output += (" " + char.toLowerCase());
            } else{
                output += char;
            }
        }
        return output.trim();
    }

    return {startingUpperCase, splitCamelCase};
}

const pippo = require("./myMath.js");
const helper = require("./caseHelper.js");
const h2 = helper2();

console.log(pippo.sum(2,2));
console.log(helper.splitCamelCase("LaCasaRossa"));
console.log(h2.splitCamelCase("LaCasaVerde"));