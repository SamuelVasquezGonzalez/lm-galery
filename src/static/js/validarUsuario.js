// let recibirUsuario = document.getElementById('recibirUsuario');

// recibirUsuario.addEventListener('click', recibirData);

// let nombreUsuario;

// let pError = document.createElement('p'); // Creamos el elemento p
// pError.classList.add('error'); // Le agregamos una clase

// function enviarError (mensaje) {
//     let errorContainer = document.querySelector('.info-modal');
//     pError.innerHTML = mensaje;
//     errorContainer.appendChild(pError)
// }

// function recibirData () {
//     let inputUsuario = document.getElementById('username');
//     let valor = inputUsuario.value

//     if(valor.length < 4){
//         enviarError('Ingrese un valor');
//     }else if(valor.length >= 4){
//         nombreUsuario = ('@' + inputUsuario.value);
//         recibirUsuario.setAttribute('disabled', true);
//         inputUsuario.setAttribute('disabled', true);
//         localStorage.setItem('usuarioActual', nombreUsuario);
//         document.location.reload();
//     }
//     console.log(nombreUsuario)
// }

// // Validar Localstorage y mostrar datos

// let usuarioCookie = localStorage.getItem('usuarioActual')

// let seccion = document.querySelector('.seccion');
// let h2 = document.querySelector('.h2');
// let pBye = document.querySelector('.p-bye');
// let formulario = document.getElementById('form');
// if(usuarioCookie){
//     seccion.style.display = 'none';
//     h2.innerHTML = ("Bienvenido: " + usuarioCookie);
//     pBye.innerHTML = 'Intenta Enviar Una foto'
//     formulario.classList.remove('oculto')
// }else{
//     console.log('aun no hay usuario')
// }