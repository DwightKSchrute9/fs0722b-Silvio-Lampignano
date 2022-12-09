fetch('users.json')
    // gestisci il successo
    .then(response => response.json())  // converti a json
    .then(json => console.log(json))    // stampa i dati sulla console
    .catch(err => console.log('Request Failed', err)); // gestisci gli errori

