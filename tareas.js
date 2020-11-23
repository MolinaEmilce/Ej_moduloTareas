let fs = require('fs'); //METODO fylesistem es nativo de js 

module.exports = moduloTareas = {
    archivo : './archivo.json',
    leerJson : function(){
        let listaDeDatos = fs.readFileSync(this.archivo,'utf-8');
        return JSON.parse(listaDeDatos); 
    },
    guardarJson : function(dato){
        let nuevoJsonGuardado = JSON.stringify(dato); //lo convierte en json
        fs.writeFileSync(this.archivo,nuevoJsonGuardado,'utf-8'); //lo sobreescribe al json
        return console.log('¡ Se ha ejecutado correctamente !');

    },
    escribirJson : function(titulo,estado){
        let tareasViejas = this.leerJson();
        let tareaNueva = {
            titulo : titulo,
            estado : estado
        }
        tareasViejas.push(tareaNueva);
        this.guardarJson(tareasViejas);
    },
    eliminarJson : function(){
        let datosViejos = this.leerJson();// objetos literales
       //elimino la utima fila del objeto y lo trae
       var tareaEliminada = datosViejos.pop();
        this.guardarJson(datosViejos);//archivo json con uno men
       return tareaEliminada;
    },
    buscarJson : function(tareaAbuscar){
        let datosViejos3 = this.leerJson(); //convierte en objeto literal
        let tareaBuscada = datosViejos3.filter(function(cadaIteracion){
            return cadaIteracion.titulo === tareaAbuscar;
        });
        return tareaBuscada
    }









}