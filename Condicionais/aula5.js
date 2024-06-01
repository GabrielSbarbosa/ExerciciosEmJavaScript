/*elabora um prog com o preço a ser pago pelo produto 
considerando o preço normal e escolha de pagamento 

condições de pag: 

a vista debito - 10% de desconto; 
a vista dinheiro ou pix - recebe 15% desconto 
duas vezes, preço normal sem juros
acima de 2 vezes, preço normal + juros de 10%
*/

let precoProduto = 10;
let debito = 0.10; 
let dinheiroPIX = 0.15; 
let duasvezes = precoProduto; 
let acimaduasvezes = (precoProduto) + (precoProduto*0.1); 
let meiodepag = '9x'; 

if(meiodepag === 'debito'){
      let valor = precoProduto - (precoProduto*debito);
      console.log(valor);
}else if( meiodepag === 'PIX' || meiodepag === 'dinheiro'){
      let valor = precoProduto - (precoProduto*dinheiroPIX);
      console.log(valor);
}else if(meiodepag === 'duasvezes' || meiodepag === '2x'){
      let valor = precoProduto;
      console.log(valor);
}else if(meiodepag > '2x' && meiodepag < '8x'){
    let valor = acimaduasvezes;
    console.log(valor);
}