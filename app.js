let process = require('process');
let comando = process.argv[2];
let moduloTareas = require('./tareas');

switch(comando){
case 'leer':
    let tareas = moduloTareas.leerJson();

    setTimeout(() => {
        console.log('-----------------------------------');
        console.log('            Lista de tareas        ');
        console.log('-----------------------------------');
        if(tareas.length === 0){
            console.log('Invalido, lista de tareas vacía :(');
        }else{
            for(let i = 0; i<tareas.length;i++){
                console.log('Titulo : '+ tareas[i].titulo + ', estado : '+ tareas[i].estado );
            }
        }
    },2000);break;
case 'agregar' : 
    
    let cant = process.argv.length;
    let titulo = process.argv[3];
    let estado = process.argv[4]; 
    if( cant === 5 ){
        moduloTareas.escribirJson(titulo,estado);
        console.log('Se agregó : titulo :'+ titulo + ', estado : '+ estado);
    }else{
        console.log('Intente de nuevo, ingrese un titulo y un estado...');
    } ;break;
case 'eliminar':
        let tareaEliminada = moduloTareas.eliminarJson();
        console.log('Eliminado, titulo : '+ tareaEliminada.titulo + ', estado : '+ tareaEliminada.estado); break;
case 'buscar' : 
    let tareaBuscada = process.argv[3];
    let resultado =  moduloTareas.buscarJson(tareaBuscada);
     
    resultado.forEach(cadaTarea => {
        console.log('Busqueda titulo : '+ cadaTarea.titulo + ' , estado : '+ cadaTarea.estado);
    })
}