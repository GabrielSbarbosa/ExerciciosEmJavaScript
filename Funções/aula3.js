// função escreva meu nome // 

function escrevaMeuNome(nome){
    console.log('Meu nome é ' + nome);
}

escrevaMeuNome('Gabriel');

// função para verificar se sou maior de idade //

function verificarIdade(idade){
    if ( idade >= 18){
        console.log("Voce é maior de idade");
    }else {
        console.log("Voce é menor de idade");
    }
}

verificarIdade(25);

// função dentro de outra função //

function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

escrevaMeuNome('Gabriel');

function verificarIdade(idade){
    if ( idade >= 18){
        console.log(escrevaMeuNome('Gabriel') + "Sou maior de idade");
    }else {
        console.log(escrevaMeuNome('Gabriel') + "Sou menor de idade");
    }
}

verificarIdade(13);


