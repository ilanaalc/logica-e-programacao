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
module.exports = { 
    somarDoisNumeros
}


