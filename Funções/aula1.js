/* Elabore um calculo IMC

IMC = peso (altura * altura)

elabore de acordo com o peso e altura de um adulto 

IMC em adultos: 

abaixo de 18.5 abaixo do peso; 
entre 18.5 e  25 peso normal; 
entre 25 e 30 acima do peso;
entre 30 e 40 obeso; 
acima de 40 obsidade grave;
*/ 

function calcularImc (peso,altura){
   return (peso)/(altura * altura); 
}

function classificarImc(IMC){
    if (IMC < 18.5){
        return "Abaixo do Peso";
    }else if(IMC >= 18.5 && IMC <= 25){
        return "Peso normal";
    }else if (IMC >= 25 && IMC <= 30){
        return "acima do peso";
    }else if (IMC >= 30 && IMC <= 40){
        return "obeso";
    }else if (IMC > 40){
        return "obesidade grave";
    }
}

function main() {
    let peso = 70;
    let altura = 1.75;
    let IMC =  calcularImc (peso,altura);
    
    console.log(classificarImc(IMC));
    console.log(calcularImc(peso,altura).toFixed(2));

}

main();