//1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura,
//  em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// function calculoDoImc (altura,peso){
//     let IMC = peso / (altura * altura);
// }

// 2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function calculoFatorial (numero){
//     if (numero == 0 || numero == 1){
//         return 1;
//     }
//     let fatorial = 1;
//     for (let i = 1; i <= numero; i++) {
//       fatorial *= i;
//     }
//     return fatorial;
// }

// 3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente 
// em reais. Para isso, considere a cotação do dólar igual a R$4,80.
// function converterDolarParaReal (valorDolar){
//     let cotacao = 4.80;
//     let valorEmReais = valorDolar * cotacao;
//     return `O valor de ${valorDolar.toFixed(2)} é ${valorEmReais.toFixed(2)}.`
// }

// 4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura
//  que serão dadas como parâmetro.
// function calculoDaAreaePerimetro (altura,largura){
//     let area = altura * largura;
//     let perimetro = 2* (altura + largura);

//     console.log(`A área da sala é: ${area} m².`);
//     console.log(`O perimetro da sala é: ${perimetro}m.`)
// }

// 5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será
//  fornecido como parâmetro. Considere Pi = 3,14.
// function calculoDaAreaePerimetro (raio){
//     let pi = 3.14;
//     let area = pi * raio * raio;
//     let perimetro = 2 * pi * raio;
    
//     console.log (`A área da sala circular é: ${area.toFixed(2)}m².`);
//     console.log (`A área do perimetro é: ${perimetro.toFixed(2)}m.`);
// }

// 6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function tabuada (numero){
//     for (let i = 1; i <=10;i ++){
//         let resultado = numero * i;
//         console.log (`${numero} x ${i} = ${resultado}`);
//     }
// }
// // Exemplo de uso:
// let numero = 2;
// tabuada(numero);