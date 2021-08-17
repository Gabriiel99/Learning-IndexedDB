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

    crmDB.onupgradeneeded = function (){
        console.log('Se ejecuta una vez');
    }

}