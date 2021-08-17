//APRENDIENDO INDEXDB

let DB;

document.addEventListener('DOMContentLoaded', () =>{
    crmDB();

    setTimeout(() =>{
        crearCliente();
    },5000);
})

function crmDB(){
    //crear base de datos
    let crmDB = window.indexedDB.open('crm',1);

    //Si hay un error
    crmDB.onerror = function(){
        console.log('Error');
    }

    //Si se creo bien
    crmDB.onsuccess = function() {
        console.log('base de datos creada');

        DB = crmDB.result;
    } 

    //Configurar la base de datos 
    crmDB.onupgradeneeded = function(e){ 
    const db = e.target.result; 
    const objectStore = db.createObjectStore('crm', {//obejto de configuracion 
        keyPath: 'crm', //adm de cliente 
        autoIncrement: true }); 
        
        //Definimos las columnas 
        objectStore.createIndex('nombre' , 'nombre', {unique: false}); 
        objectStore.createIndex('email' , 'email', {unique: true}); 
        objectStore.createIndex('telefono' , 'telefono', {unique: false}); 
    
    
    }     
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaccion hecha');
    }

    transaction.onerror = function(){
        console.log('Hubo un error');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 454545,
        nombre : 'Gabi',
        email: 'email@email,com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}