//PEGUE A FUNÇÃO SOMA QUE ESTÁ NO ARQUIVO X
const {somarDoisNumeros} = require('../src/calculadora'); // PARA TESTAR A FUNÇÃO X TEM QUE TER ELA AQUI
const {expect} = require('chai');

describe ('Testes da Função Soma', function () { //agrupamento de testes // switch de teste -- QUE VEM DO MOCHA -- pode ter um describe do describe do describe.
    it ('A função deve ser capaz de somar dois números positivos', function (){ //caso de teste -- função de teste -- a função anônima é mandatoria, tem que ta em todo it e describe que eu fizer //pode ter condição ifs, mas não é uma boa prática(se colocar complexidade no teste, o ser humano tem que avaliar entrar na condição 1 e funcionar e assim por diante, e com isso, deve testar o meu teste)        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3);  //não muda o nome das variaveis e não da erro pois cada uma está dentro da sua respectiva chave e com isso elas não se enxergam

        // Compara o resultado com o valor da soma - VEM DO CHAI
        expect (resultadoDaSoma).to.equal(8);
    });

    it ('A função deve ser capaz de somar um número positivo e um número negativo', function (){
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        // Compara o resultado com o valor da soma
        expect (resultadoDaSoma).to.equal(35);
    });

    it ('A função deve ser capaz de somar dois números zerados', function () {
         // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(0, 0);

        // Compara o resultado com o valor da soma
        expect(resultadoDaSoma).to.be.equal(0);
    }); 

    it ('A função deve ser capaz de somar dois números negativos', function () {
         // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(-10, -5);

        // Compara o resultado com o valor da soma
        expect(resultadoDaSoma).to.be.equal(-15);
    });
});


//TESTAR SEM USO DE BIBLIOTECAS
// const resultadoDaSoma = somarDoisNumeros(5, 3);

// console.log(resultadoDaSoma);