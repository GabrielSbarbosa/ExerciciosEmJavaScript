const { gets, print } = require('./funcoes-auxiliares');


/* uma sala contem 5 alunos e para cada aluno foi sorteado de 1-100. Faça um prog que receba 
os 5 numeros sorteados e mostre o maior deles */

const quantidadeAlunos = gets();
let MaiorValorEncontrado = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > MaiorValorEncontrado){
        MaiorValorEncontrado = numerosSorteado;
    }

}

print(MaiorValorEncontrado);



