
// Crea un array di oggetti che rappresentano delle persone
// Ogni persona ha un nome, un cognome e un’età.
const users = [
    {
        nome: 'Roberto',
        cognome: 'Latini',
        età: 26,
    },

    {
        nome: 'Marisa',
        cognome: 'Gugliotti',
        età: 73,
    },

    {
        nome: 'Valeria',
        cognome: 'Sozzi',
        età: 27,
    },

    {
        nome: 'Piero',
        cognome: 'Rossi',
        età: 60,
    },

    {
        nome: 'Sandro',
        cognome: 'Pioli',
        età: 83,
    },

    {
        nome: 'Samuele',
        cognome: 'Lidi',
        età: 8,
    },

    {
        nome: 'Flavia',
        cognome: 'Patell',
        età: 17,
    },
];


// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const newArray = users.map((user) => {
    if (user.età < 18 || user.età > 70) {
        return `${user.nome} ${user.cognome} di anni:${user.età} NON può guidare`
    } else {
        return `${user.nome} ${user.cognome} di anni:${user.età} può guidare`
    }
});

console.log(newArray);