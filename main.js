/* Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. */

const root = new Vue(
    {
        el: '#test',
        data: {
            frase: 'Questa è una prova di Vue',
            img: 'https://picsum.photos/500/800'
        }
    }
);