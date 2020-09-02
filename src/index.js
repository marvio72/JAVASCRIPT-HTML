const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeUrl).then(resp => {
//   // resp.json().then(data => {
//   //   console.log(data.id);
//   //   console.log(data.value);
//   // });
//     //Con restructuración
//   resp.json().then(({id, value}) => {
//     console.log(id);
//     console.log(value);
// });
// });

/*
Promesas en cadena
*/

fetch(jokeUrl)
    .then(resp => resp.json())
    .then(({id,value}) => {
        console.log(id,value);
    });
    