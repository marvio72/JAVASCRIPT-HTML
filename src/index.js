import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name: 'Marco',
    job: 'Ingeniero'
}).then(console.log);

CRUD.actualizarUsuario(1,{
    name: 'Rafael',
    job: 'Carpintero'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);