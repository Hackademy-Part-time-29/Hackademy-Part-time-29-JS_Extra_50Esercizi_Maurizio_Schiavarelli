// // calcolare l'area di un cerchio di raggio x      

// let raggio = 10;

let piGreco = 3.14;

// function areaCerchio (raggio){                                           //accetta in entrata il raggio

//     return piGreco * ( raggio ** 2);
// }

// console.log(areaCerchio(10))

// // calcola l'area di tutti i cerchi con raggio da 1 a 10

// areaCerchio = 1

// for( let i = 1 ; i <=10 ; i++ ){

//     areaCerchio = piGreco * ( i ** 2);
//     console.log(areaCerchio);
// }








//esercizio 2 calcolare l'ipotenusa di un triangolo rettangolo di cateti 3 e 4        c = √ (a² + b²)

// let catetoA = 3;

// let catetoB = 4;



// function calcoloIpotenusa (a, b){

//     return Math.sqrt((a**2)+(b**2));
// }

// console.log(calcoloIpotenusa(3, 4))










// scrivere un funzione che assegnati due numeri generi un numero random inter fra i due assegnati (compresi)  
// (Math.floor(Math.random() * (6 - 1) + 1))

// let numeroMassimo = 2;

// let numeroMinimo = 1 ;

// let numeroCasuale = Math.round(Math.random() * (numeroMassimo - numeroMinimo)) + numeroMinimo; 



// function nCasuale (max, min){

//     return Math.round(Math.random() * (max - min)) + min;

// }

// console.log(nCasuale(4, 2))


//scrivere una funzione che trasformi un nome nelle sue iniziali

let nome = `maurizio schiavarelli`

console.log(nome.split(` `).map( el => el[0] + `.`).join(``))

