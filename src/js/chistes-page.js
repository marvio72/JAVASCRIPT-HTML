import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;
let contador = 0;

const crearChistesHtml = () => {
    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro Chiste</button>

        <ol class="mt-2 list-group">
        </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
};

const iniciar = async() => {
    numChiste();
    dibujarChiste(await obtenerChiste());
};

const numChiste = () => {
    contador ++;
};

const evento = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async()=> {
        btnOtro.disabled = true;
        numChiste();
        dibujarChiste(await obtenerChiste());
        btnOtro.disabled = false;
    });
};


// Esperamos un Chiste con los valores { id , value }
const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${contador}.- ${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
};

export const init = () => {
    crearChistesHtml();
    iniciar();
    evento();
};