const entradas = [10,58,10,98,23,50,96,456,52,4,78];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};
