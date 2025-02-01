let names = [];
const div = document.querySelector('#users');

let response;
do {
    let name = prompt("Type the name of the interested:");
    
    if (name) {
        names.push(name);
        console.table(names);

        div.innerHTML = "";

        for (let i = 0; i < names.length; i++) {
            const user = document.createElement('li');
            user.innerText = names[i];
            div.appendChild(user);
        }
    }

    response = prompt("Do you want to continue? (s/n)").toLowerCase();
    
} while (response === "s");
