/*
PROPOSITO: DESCRIBE AL MOMENTO DE ESTABLECER EL NOMBRE *nombre* UN TEXTO PREESTABLECIDO
EN TIEMPO REAL PARA FACILITARLE LA CONSULTA AL USUARIO.
PRECONDICION:DEBE escribirse al menos un nombre.
*/
window.addEventListener('DOMContentLoaded', function() {
    const nombreInput = document.getElementById('nombre');
    const mensajeTextarea = document.getElementById('mensaje');

    nombreInput.addEventListener('input', function() {
      const textoPredefinido = 'Hola, mi nombre es ' + nombreInput.value + ' y quería consultar presupuesto por: ';
      mensajeTextarea.value = textoPredefinido;
    });
  });


/*
PROPOSITO: button cambia de modo oscuro a modo claro
PRECONDICION:ninguna.
*/

let button = document.getElementById("myButton");
let titulo = document.getElementById("titulo");
let texto = document.getElementById("container");
let isBlack = false;

button.addEventListener("click", function(){
    if(isBlack === true){
        document.body.style.background = 'url(fondo.jpg)';
        document.body.style.color = "black";
        titulo.style.color = '#51c153';
        button.innerHTML = '<h4>Modo oscuro</h4>';
        texto.style.color = 'white'
        isBlack = false;
    } else {
        document.body.style.background = "#ccc";
        document.body.style.color = 'black';
        titulo.style.color = 'black';
        button.innerHTML = '<h4>Modo claro</h4>';
        texto.style.color = 'black'
        
        isBlack = true;
    }
});

