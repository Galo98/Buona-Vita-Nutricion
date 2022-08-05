var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function (evento) { //agregar una escucha de eventos "doble click" y ejecuta
    evento.target.parentNode.classList.add("eliminacion");
    // evento es el elemento al que se le hizo click
    //target hace foco en ese elemento al que le hizo click
    //parentNode lleva el elemento hasta su etiqueta padre
    setTimeout(function () {
        evento.target.parentNode.remove(); // remove(); es la funcion para eliminar elementos del html
    }, 500); // setTimeout(ejecucion,tiempo); el tiempo es en milisegundos 1000 milisegundos en un segundo.
});


