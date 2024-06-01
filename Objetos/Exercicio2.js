/*Crie uma classe para descrever pessoas 
para cada pessoa teremos atributos: nome, peso, altura.
as pessoas terao que dizer seus IMC = PESO / (ALTURA*ALTURA)
instacie uma pessoa chamada jose com 70kg e 1,75 de altura e peça ao jose dizer seu IMC 

abaixo de 18.5 abaixo do peso; 
entre 18.5 e  25 peso normal; 
entre 25 e 30 acima do peso;
entre 30 e 40 obeso; 
acima de 40 obsidade grave; 
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
      return  this.peso / (this.altura*this.altura);
    }

    classificarIMC(){
        const IMC = this.calcularIMC();
        if (IMC <= 18.5 ){
            return "Abaixo do peso";
        }else if(IMC > 18.5 && IMC < 25){
            return "Peso normal";
        }else if(IMC > 25 && IMC < 30 ){
            return "Acima do Peso";
        }else if(IMC > 30 && IMC < 40){
            return "Obeso";
        }else if(IMC > 40){
            return "Acima de Peso";
        }
    }

}

const Jose = new Pessoas('Jose', 70, 1.75);
console.log(Jose.calcularIMC());
console.log(Jose.classificarIMC());

const João = new Pessoas('João',80, 1.70);
console.log(João.calcularIMC());
console.log(João.classificarIMC());

const Miguel = new Pessoas('Miguel', 40, 1.60);
console.log(Miguel.calcularIMC());
console.log(Miguel.classificarIMC());




















