// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

// ricopio array

const animals = [
    { 
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },

    { 
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },

    { 
        nome: 'gufo',
        famiglia: 'strigidae',
        classe: 'aves'
    },

    {   
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    }
];

// Crea un nuovo array con la lista dei mammiferi.

const mammalsArray = animals.filter((animal) => animal.classe == 'mammiferi');
console.log(mammalsArray);
