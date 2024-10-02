class Usuario{
    constructor(nome){
        this._nome = nome;
    }
};

let nome = prompt("Digite seu nome: ")
var usuario1 = new Usuario(nome);
console.log(usuario1._nome);