//APRENDIENDO INDEXDB

document.addEventListener('DOMContentLoaded', () =>{
    crmDB();
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