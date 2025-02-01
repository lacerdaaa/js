// 5. Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está
// correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser
// apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”. 

let password;
let accepted;

do {
    accepted=false
    password = prompt("Defina uma senha de quatro digitos:")

    if (password.length > 4 || password.length < 4) {
        alert("A senha deve ter quatro digitos.")
        accepted = true
    }

} while (accepted == true);