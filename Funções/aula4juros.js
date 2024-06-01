/* elabora um prog com o preço a ser pago pelo produto 
considerando o preço normal e escolha de pagamento 

condições de pag: 

1 - a vista debito - 10% de desconto; 
2 - a vista dinheiro ou pix - recebe 15% desconto 
3 - duas vezes, preço normal sem juros
4 - acima de 2 vezes, preço normal + juros de 10%
*/

function desconto(precoProduto){
     let valor = precoProduto - (precoProduto*0.10);
     return valor; 
}

function Avista(precoProduto){
    let valor = precoProduto - (precoProduto*0.15);
    return valor;
}

function DuasVezes(precoProduto){
    let valor = precoProduto;
    return valor;
}

function VezesMais(precoProduto){
    let valor = (precoProduto) + (precoProduto*0.1);
    return valor;
}


(function (){

    let precoProduto = 10;
    let meiodepag = 4;

if (meiodepag === 1) {
    console.log(desconto(precoProduto));
}else if( meiodepag === 2){
    console.log(Avista(precoProduto));
}else if(meiodepag === 3){
    console.log(DuasVezes(precoProduto));
}else if(meiodepag === 4){
    console.log(VezesMais(precoProduto));
}
})();

