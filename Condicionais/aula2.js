/* faça um prog para calcular o valor de uma viagem

Voce tera 3 variaveis, sendo elas: 

1 - Preço etanol;
2 - Preço gasolina; 
1 - tipo de combustivel;
2 - gasto medio do combustivel de carro por km;
3 - distacia de km da viagem; 

imprima no console o valor que sera gasto de combustivel para a viagem. 


############

1 - Preço etanol; R$ 3,42
2 - Preço gasolina; R$ 5,84
3 - tipo de combustivel; 
4 - gasto medio do combustivel de carro por km; 11km por litro - combustivel  /11km = R$ 0,54 POR KM
5 - distacia de km da viagem; 100 km    -   0,54 * 100KM = 54 REAIS de gasolina 
6 - preço viagem = 54 reais 

*/


const etanol = 3.42;
const gasolina = 5.84;
let combustivel = 'etanol'; 
let gastomedio = 11; 
let distacia = 200;


if (combustivel === 'etanol'){
      let precomedio = etanol / gastomedio;
      let viagem = precomedio * distacia;
      console.log(viagem.toFixed(2));
} else if(combustivel === 'gasolina'){
      let precomedio = gasolina / gastomedio;
      let viagem = precomedio * distacia;
      console.log(viagem.toFixed(2));
}else{
      console.log('combustivel nao encontrado!');
}

