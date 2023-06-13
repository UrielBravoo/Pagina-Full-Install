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

