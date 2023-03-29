
// Validacion de edad
const edadMinima = 18;
const longitudPassword = 4;

const formulario = document.createElement('form');
formulario.id = 'formulario';

const nacimiento = document.createElement('input');
nacimiento.type = 'date';
nacimiento.id = 'nacimiento';
nacimiento.required = true;

const enviar = document.createElement('button');
enviar.type = 'submit';
enviar.innerHTML = 'Ingrese fecha Nacimiento';


formulario.appendChild(nacimiento);
formulario.appendChild(enviar);
document.body.appendChild(formulario);

const resultado = document.getElementById('resultado');
formulario.addEventListener('submit', function (event) {
	event.preventDefault(); // Evito el envio del formulario por defecto

	const anioNacimiento = nacimiento.value;
	const fechaActual = new Date();
	const anioActual = fechaActual.getFullYear();
	const edadUsuario = anioActual - anioNacimiento.substring(0, 4);

	if (edadUsuario >= edadMinima) {
		let password = '';
		for (let i = 0; i < longitudPassword; i++) {
			password += Math.floor(Math.random() * 10);
		}
		resultado.innerHTML = `Su contraseña aleatoria es: ${password}`;
		sessionStorage.setItem('password', password); // Guardo la psw en sessionStorage
	} else {
		resultado.innerHTML = 'Debe ser mayor de 18 años para generar una contraseña';
	}
});