// Este código es una función en JavaScript que valida un formulario de contacto en una página web. 
// Al cargar la página, la función se ejecuta y añade validación al formulario de contacto, asegurando 
// que los datos ingresados sean válidos. Si el formulario no es válido, se previene el envío y se detiene
//  la propagación del evento. La función también añade la clase "was-validated" al formulario para marcar
//   que se ha validado. En caso de que los datos ingresados no sean válidos, se añade la clase "is-invalid" 
//   a los elementos correspondientes para mostrar visualmente que hay errores en el formulario. En resumen,
//    este código se encarga de validar y mostrar los errores en un formulario de contacto en una página web.

// Validación del formulario
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var form = document.getElementById('contact-form');
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
      form.addEventListener('input', function(event) {
        if (event.target.validity.valid) {
          event.target.classList.remove('is-invalid');
        } else {
          event.target.classList.add('is-invalid');
        }
      }, false);
    }, false);
  })();
  



  