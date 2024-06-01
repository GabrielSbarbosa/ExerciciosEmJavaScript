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

// Instanciando uma pessoa // 

const Gabriel = new pessoa();
Gabriel.nome = 'Gabriel S Barbosa';
Gabriel.idade = 24;

const Miguel = new pessoa();
Miguel.nome = 'Miguel S Barbosa';
Miguel.idade = 14;

console.log(Gabriel);
console.log(Miguel);

Gabriel.descrever();
Miguel.descrever();







