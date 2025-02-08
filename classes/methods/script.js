class User {
    constructor( name, email) {
        this.name = name
        this.email = email
    }
    sendEmail() {
        console.log(`Email enviado para ${this.name} no email ${this.email} `)
    }
}

const usuario = new User("Lucas", "lucas@gmail.com")
usuario.sendEmail()
