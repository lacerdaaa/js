// 1. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

/*
let countryA = 80000
let percentualA = 1.03

let countryB = 200000
let percentualB = 1.015

let years = 0;

while( countryA <= countryB ) {
    countryA *= percentualA
    countryB *= percentualB 

    years++
}

console.log(`to the population of country A to exceed the population of country B it will take ${years} anos`)
*/

const growth = (population, rate) => population * rate;

let countryA = 80000;
let growthRateA = 1.03; 

let countryB = 200000;
let growthRateB = 1.015; 

let years = 0;

for (; countryA <= countryB; years++) {
    countryA = growth(countryA, growthRateA);
    countryB = growth(countryB, growthRateB);
}

console.log(`Para que a população do país A ultrapasse ou iguale a população do país B, serão necessários ${years} anos.`);