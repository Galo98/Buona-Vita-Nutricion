var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var tabla = document.querySelector("#tabla-pacientes");

    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //Crear etiquetas 1 tr y 5 td
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var nombreTd = document.createElement("td");
    nombreTd.classList.add("info-nombre");
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso,altura);

    tabla.appendChild(pacienteTr);
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    console.log(pacienteTr);

});