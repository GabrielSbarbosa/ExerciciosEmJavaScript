/*Crie uma classe para representar carros 
os carros possui marca, uma cor e um gasto medio de combustivel por km rodado
crie um metodo que dado quantidade de quilometros e o preço do combustivel, nos de o valor gasto em reais para realizar o percurso. */

class Carro {
    marca;
    cor;
    gastomedio;

    constructor(marca,cor,gastomedio){
        this.marca = marca;
        this.cor = cor;
        this.gastomedio = gastomedio;
    }

    calculargasto(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastomedio * precoCombustivel;
    }

}

const HB20 = new Carro('VolksWagen', 'preto', 1/12);

console.log(HB20.calculargasto(500,7).toFixed(2));

const Monza = new Carro('Fiat', 'branco', 1/13);
console.log(Monza.calculargasto(500,7).toFixed(2));











