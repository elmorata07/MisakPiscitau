var database = []
var miposicion = ""

// funcion registrar datos
var registrar = function(){
    var nombres = document.getElementById("name").value
    var apellidos = document.getElementById("lastname").value
    var cedula = document.getElementById("identify").value
    var direccion = document.getElementById("address").value
    var perfil = document.getElementById("perfil").value

    if(nombres == undefined || nombres == null || nombres == ""){
        alert("El campo nombres es obligatorio")
        return false
    }

    if(apellidos == undefined || apellidos == null || apellidos == ""){
        alert("El campo apellidos es obligatorio")
        return false
    }

    if(cedula == undefined || cedula == null || cedula ==  ""){
        alert("El campo cédula/N° identificación es obligatorio")
        return false
    }

    if(direccion == undefined || direccion == null || direccion == ""){
        alert("El campo dirección es obligatorio")
        return false
    }

    var posicion = database.findIndex((item) => item.identify == cedula)

    if(posicion == -1){
        database.push({
            name: nombres,
            lastname: apellidos,
            identify: cedula,
            address: direccion,
            perfil:perfil
        })
        console.log(database)
        cargardatos()
        limpiarformulario()
        alert("usuario registrado")
    }
    else{
        alert("usuario ya registrado con este número de documento")
    }
}
// funcion cargar datos
var cargardatos = function(){
    var tabladatos = document.getElementById("tabladb")
    tabladb.innerHTML = ""
    database = database.reverse()
    for (let a = 0; a < database.length; a++) {
        tabladb.innerHTML = tabladb.innerHTML + `<tr>
        <td onclick="seleccionar(${a})">${database[a].identify}</td>
        <td onclick="seleccionar(${a})">${database[a].name}</td>
        <td onclick="seleccionar(${a})">${database[a].lastname}</td>
        <td onclick="seleccionar(${a})">${database[a].address}</td>
        <td onclick="eliminar(${a})"><button type="button" class="btn btn-danger">Eliminar</button></td>
        </tr>`
    }
}
// funcion limpiar el formulario
var limpiarformulario = function(){
    miposicion = ""
    document.getElementById("name").value = ""
    document.getElementById("lastname").value = ""
    document.getElementById("identify").value = ""
    document.getElementById("address").value = ""
    document.getElementById("perfil").value = ""
}
// funcion seleccionar, que me permite seleccionar cada registro y que se cargue al formulario
var seleccionar = function(posicion){
    miposicion = posicion
    console.log(database[posicion].name)
    document.getElementById("name").value = database[posicion].name
    document.getElementById("lastname").value = database[posicion].lastname
    document.getElementById("identify").value = database[posicion].identify
    document.getElementById("address").value = database[posicion].address
    document.getElementById("perfil").value = database[posicion].perfil
}
// funcion para actualizar algun registro dentro del array
var actualizar = function(){
    console.log(miposicion)
    var nombres = document.getElementById("name").value
    var apellidos = document.getElementById("lastname").value
    var cedula = document.getElementById("identify").value
    var direccion = document.getElementById("address").value
    var perfil = document.getElementById("perfil").value

    database[miposicion].name = nombres
    database[miposicion].lastname = apellidos
    database[miposicion].identify = cedula
    database[miposicion].address = direccion
    database[miposicion].perfil = perfil

    alert("se modifico el resgitro")
    database = database.reverse()
    cargardatos()
    limpiarformulario()
}
// funcion para eliminar un registro del array
var eliminar =  function(posicion){
    console.log(posicion)

    database.splice(posicion, 1)
    database = database.reverse()
    alert("Elemento borrado")
    cargardatos()
}
// funcion para filtrar


var buscar = function(){
    var resultado = []

    var criterioBusqueda = document.getElementById("search_id").value

    var busqueda = database.find(persona => persona.identify === criterioBusqueda)
        document.getElementById("tabla_filtro").innerHTML = ` <tr>
        <td>${busqueda.identify}</td>
        <td>${busqueda.name}</td>
        <td>${busqueda.lastname}</td>
        <td>${busqueda.address}</td>
        </tr>`    
    console.log(busqueda)
}