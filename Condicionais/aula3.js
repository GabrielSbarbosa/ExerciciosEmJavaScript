/* imprima a media de 3 notas de um aluno e sua classificação 

media = (nota 1 + nota 2 + nota 3) / 3

media menor q 5 > reprovado 
media entre 5 e 7 > recuperação 
media acima de 7 > aprovado 
*/

let nota1 = 9;
let nota2 = 6;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3; 

if (media < 5){
    console.log("Reprovado!");
    console.log(media.toFixed(2));
}else if(media >= 5 && media <= 7){
    console.log("recuperação!");
    console.log(media.toFixed(2));
}else if (media > 7){
    console.log("aprovado");
    console.log(media.toFixed(2));
}
