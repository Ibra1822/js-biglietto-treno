/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


let km = parseInt(prompt('Quanti km vuoi percorrere'));

const prezzokm = 0.21 ;

let prezzoStandard =  km * prezzokm;

console.log(prezzoStandard);


const eta = parseInt(prompt('Quanti anni hai?'));

const etaMinori = 18;
 
const scontoMinori=  0.20;

let scontoTotMinori = prezzoStandard - prezzoStandard * scontoMinori;


const etaAnziani = 65; 

const scontoAnziani = 0.50;

let scontoTotAnziani = prezzoStandard - prezzoStandard * scontoAnziani;


if(eta < etaMinori){

  console.log(scontoTotMinori.toFixed(2));

  document.getElementById('tutto').innerHTML= scontoTotMinori.toFixed(2);

}


else if(eta > etaAnziani){
  
  console.log(scontoTotAnziani);


  document.getElementById('tutto').innerHTML= scontoTotAnziani.toFixed(2);
}else{
  document.getElementById('tutto').innerHTML= prezzoStandard.toFixed(2);
}


















