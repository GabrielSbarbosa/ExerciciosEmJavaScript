// Definição de uma pessoa(classe)//

class pessoa{
    nome;
    idade;
    anodenascimento;

// serve para ter obrigação de ter esses dados do constructor na instancia // 
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anodenascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const Gabriel = new pessoa('Gabriel', 24);

console.log(Gabriel);










