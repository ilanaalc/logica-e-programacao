function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    // 1. Soma todos os valores
    const resultadoDaSomaDeDoisValores = (somarDoisNumeros(valor1, valor2));

    //2. Divide pela quantidades de números passados
    const resultadoDaMediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;

    //3. Retorna o resultado
    return resultadoDaMediaDeDoisValores;
}

//MOSTRE A FUNÇÃO SOMA PARA QUALQUER OUTRO ARQUIVO
module.exports = { //module exports significa mostrar para o mundo
    somarDoisNumeros
    //nome da função que você quer mostrar para o mundo 
}

//se em algum momento eu mencionar a palavra guardar ou armazenar, eu preciso criar uma caixa. 
//quem for usar a função de somar, vai precisar saber do resultado
//com a caix dentro das chaves, nunca vai conseguir acessar o resultado, com isso tem que mostrar a caixa para a pessoa, e para isso, você retorna o valor da caixa
//quando não se tem entrrada, a função fica vazia () e pega os valores do html -- caso a função tenha entrada, isso fica implicito, pois o somar vai receber essa outra funcao
//sempre que você for ter uma plavra retorne, você vai ter que ter um caixa antes para armazenar ela.

