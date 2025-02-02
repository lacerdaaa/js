// 5. Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está
// correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser
// apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”. 

function isFourDigitNumber(password) {
    return /^\d{4}$/.test(password);
}

let password;
do {
    password = prompt("Crie uma senha de 4 números inteiros");
    if (!isFourDigitNumber(password)) {
        alert("A senha deve ter exatamente quatro dígitos inteiros");
    }
} while (!isFourDigitNumber(password));

let checkpassword;
do {
    checkpassword = prompt("Digite a senha de 4 números inteiros que você criou");
    if (checkpassword !== password) {
        alert("Senha Incorreta");
    }
} while (checkpassword !== password);

alert("Senha Correta");