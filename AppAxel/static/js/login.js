// Este código es una función en JavaScript que se utiliza para validar un formulario de inicio de sesión 
// en una página web. La función se ejecuta cuando se envía el formulario, y previene el comportamiento 
// predeterminado del formulario usando event.preventDefault(). A continuación, la función valida los campos 
// de nombre de usuario y contraseña, y muestra un mensaje de alerta si alguno de los campos está vacío. 
// Si ambos campos están completos, la función muestra un mensaje de alerta que indica que el inicio de sesión
//  ha sido exitoso. Este código es útil para cualquier persona que desee agregar validación básica a un 
//  formulario de inicio de sesión en una página web.

const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	if (username.value === '') {
		alert('Por favor ingresa tu nombre de usuario');
		username.focus();
		return false;
	}

	if (password.value === '') {
		alert('Por favor ingresa tu contraseña');
		password.focus();
		return false;
	}

	// Si se han pasado todas las validaciones, se puede enviar el formulario
	alert('LOGIN EXITOSO!!!');
});
