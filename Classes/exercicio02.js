class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    seApresentar(){
    console.log(`Olá, Meu  nome é ${this.nome}, tenho ${this.idade} anos de idade e tenho ${this.altura} de altura`)
    }
}
const User = new Pessoa("Juju", 16, 1.62)
const User1 = new Pessoa("Lulu", 16, 1.58)

User1.seApresentar();

//console.log(User);
//console.log(User1);