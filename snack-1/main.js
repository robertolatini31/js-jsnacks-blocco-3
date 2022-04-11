// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).


const AutoArray = [
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'benzina'
    },
    {
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    },
    {
        marca: 'toyota',
        modello: 'yaris',
        alimentazione: 'gpl'
    },
    {
        marca: 'suzuki',
        modello: 'swift',
        alimentazione: 'elettrico'
    },
    {
        marca: 'alfa',
        modello: 'stelvio',
        alimentazione: 'diesel'
    },
    {
        marca: 'mercedes',
        modello: 'classe a',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'cubo',
        alimentazione: 'gpl'
    },
    {
        marca: 'seat',
        modello: 'ibiza',
        alimentazione: 'benzina'
    },
    {
        marca: 'land rover',
        modello: 'freelander 2',
        alimentazione: 'benzina'
    }

];

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina,
// nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const autoBenzina = AutoArray.filter((auto) => (auto.alimentazione == 'benzina'));
console.log(autoBenzina);

const autoDiesel = AutoArray.filter((auto) => (auto.alimentazione == 'diesel'));
console.log(autoDiesel);

const autoAltro = AutoArray.filter((auto) => (auto.alimentazione != 'diesel' && auto.alimentazione != 'benzina'));
console.log(autoAltro);


// Infine stampa separatamente i 3 array. (modificato) 
