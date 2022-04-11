// Snack 2:
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']

// A partire da un array di stringhe
const stringArray = ['grogu', 'MANDO', 'Luke'];

// crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola

const newStringArray = []; // inizializzo una stringa vuota

stringArray.forEach(element => { // ciclo per il primo array
    newStringArray.push(element.charAt(0).toLocaleUpperCase() + element.slice(1).toLocaleLowerCase()) // imposto il primo carattere come  maiuscolo e a partire dal secondo in minuscolo
});

console.log(newStringArray); // loggo