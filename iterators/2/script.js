const sum = (a, b) => alert(`Resultado: ${a + b}`);
const subtraction = (a, b) => alert(`Resultado: ${a - b}`);
const multiplication = (a, b) => alert(`Resultado: ${a * b}`);
const division = (a, b) => {
    if (b === 0) {
        alert("Erro: divisão por zero não é permitida.");
    } else {
        alert(`Resultado: ${a / b}`);
    }
};

let agreed;
do {
    let option = prompt(
        "Escolha uma operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão"
    );

    let first_number = Number(prompt("Digite o primeiro número:"));
    let second_number = Number(prompt("Digite o segundo número:"));

    switch (option) {
        case "1":
            sum(first_number, second_number);
            break;
        case "2":
            subtraction(first_number, second_number);
            break;
        case "3":
            multiplication(first_number, second_number);
            break;
        case "4":
            division(first_number, second_number);
            break;
        default:
            alert("Opção inválida!");
    }

    agreed = prompt("Deseja continuar? (s/n)").toLowerCase();
} while (agreed === "s");
