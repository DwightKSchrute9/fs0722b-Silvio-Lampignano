/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function nome (f,g) {
  let str1 = f.slice(0,2) + g.slice(-3);
  let str2 = str1.toUpperCase();
  return str2;
}

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

function valoriDispari(){
  let valoriDispari = [];
  for (let i =0 ; i <= 100 ; i++){
    if (i % 2 != 0) {
      valoriDispari.push (i);
    }
    return valoriDispari
  }
  }  
  console.log(valoriDispari());
    
/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

  function valoriMultipliDi5(){
    let arrrayMultipli5 = [];
    for (let i=0; i <=100 ; i++ ) {
      if (i % 5 === 0) 
      arrrayMultipli5.push (i);
        }
    return arrrayMultipli5;
  }
  console.log(valoriMultipliDi5());



/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

  let arr3 = []
  for (let i = 0; i <=100 ;i++) {
    arr3.push (Math.round(Math.random()*100))
  }
console.log (arr3)


/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
const arr2 =function(arr) {
  let evenArray = []
  for (let i=0; i<arr.length; i++) {
    if (arr2[i] % 2 === 0) {
      evenArray.push (arr2[i])
    }
  }
  return evenArray
}
let array =[34,67,35,85,100,4]
console.log (arr2(array));

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */


/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
//function incrementAray (arrayDaIncrementare) {
 // for (let i = 0; i < arrayDaIncrementare.length ; i++) {
 //  arrayDaIncrementare [i]++;
 // }
  //return arrayDaIncrementare

//console.log ('esercizio 7');
//console.log('array incrementato:' + incrementaArray(Array));


/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/


let animali = ["Adinolfi", "Berlu", "Salvini"];
function strToNumArray(array) {
  let s = [];
  for (let u of array) {
    s.push(u.length);
  }
  console.log (s)
  return s;
}

console.log(strToNumArray(animali))
  



/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/
const deleteEven = function(arry) {
  
  let counter = 0 ;
  while (counter !== arry.length) {
    if(arry[counter]%2 === 0) {
      arry.splice(counter, 1)
    } 
      counter++
    }
    return arry;
    
  }
  console.log(deleteEven('arry'));

 

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

  const createRandomWithoutDuplicate = function () {
    let array = []                                              //dichiarato array vuoto
    for (let i = 0; i < 10; i++) {
      let added = false                                         //per rimanere nel ciclo while nel caso if viene verificato
      while (!added) {                                          //consizione per il while che fa ripetere il ciclo finche non viene inserito un elemento
        let numberAdd = Math.ceil(Math.random()*100)            // in questo passaggio viene inserita una variabile da 1 a 100
        if (!array.includes (numberAdd)) { ///
          array.push (numberAdd)                                // se non è presente va ad eseguiore un .push()del numero generato
          added = true                                          // in questo modo esci dal ciclo quando un elemento viene aggiunto all'array e va a ripetere questra istruzione per gli altri elementi dell'array
        }
      }
    };
    return array
  }
  console.log (createRandomWithoutDuplicate())
  

  /*function arrayRadndom () {
    let arr = []; //creo un array vuoto chiamato array
    let numeroRandom  // creo la variabile numero random nella quale verrra memorizzato un numero random 
    let i = 0; // creo l'indice i utile per il ciclo while
    while (i < 10 ){ //apro il ciclo while e lo faccio ciclare finche l'indice non e' uguale a 10
      numeroRandom = Math.floor(Math.random()*11); //alla variabile numero random affido un numero random da 0 a 10
      if (!array.includes(numeroRandom)){ //avvio un if dove diro 'se in tutto l'Array non esiste il valore presente nella VARIABILe allora verifica la condizione interna
        array.push(numeroRandom);// se la condizione sara verificata nell'if pusho nel nostro array la variabile del numero random
        i++; //aumento il contatore del while (in questo caso solo se la condizione del if sara verificata)

      }
    return array ; // ritorno all'array
  }
}
let array = arrayRandom ()

console.log(array);*/



/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

let arrayDaInvertire = [1,3,5,]
function inversione (array){
  return array.reverse
}

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
