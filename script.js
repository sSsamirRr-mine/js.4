'use strict';

let name = prompt("so'z").trim();

let harf = prompt('harf')

let nameLower = name.toLowerCase();

let harfLower = harf.toLowerCase();

console.log(` ${name.split("")} `);

console.log(harf);

let memo = (nameLower.includes(harfLower));

console.log(memo);


if (memo == true) {
    alert("Ha, bu harf so'zda bor")
} else {
    alert("yo'q, bu harf so'zda yo'q")
}
