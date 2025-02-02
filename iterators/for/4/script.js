// 3. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
// 4. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

let populationA;
let growthRateA;

let populationB;
let growthRateB;

const increase = (population, growth) => population * growth;

let option;
let format;

do {
    populationA = Number(prompt("Digite a população do país A:"));
    growthRateA = 1 + Number(prompt("Taxa de crescimento anual do país A (em decimal, por exemplo, 0.03 para 3%):"));

    populationB = Number(prompt("Digite a população do país B:"));
    growthRateB = 1 + Number(prompt("Taxa de crescimento anual do país B (em decimal, por exemplo, 0.015 para 1.5%):"));

    let years = 0;

    for (; populationA <= populationB; years++) {
        populationA = increase(populationA, growthRateA);
        populationB = increase(populationB, growthRateB);
    }

    alert(`Serão necessários ${years} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
    option = prompt("Deseja continuar? (Digite 'n' para sair)");
    format = option.toLowerCase()

} while (format !== 'n');