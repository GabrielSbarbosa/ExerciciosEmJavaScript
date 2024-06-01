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

let peso = 70;
let altura = 1.75;

let IMC = (peso)/(altura * altura); 

if (IMC < 18.5){
    console.log("Abaixo do Peso");
    console.log(IMC.toFixed(2));
}else if(IMC >= 18.5 && IMC <= 25){
    console.log("Peso normal");
    console.log(IMC.toFixed(2));
}else if (IMC >= 25 && IMC <= 30){
    console.log("acima do peso");
    console.log(IMC.toFixed(2));
}else if (IMC >= 30 && IMC <= 40){
    console.log("obeso");
    console.log(IMC.toFixed(2));
}else if (IMC > 40){
    console.log("obesidade grave");
    console.log(IMC.toFixed(2));
}