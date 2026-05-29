import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const btnRegister = document.getElementById('btn-register');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const mensaje = document.getElementById('mensaje');

btnRegister.addEventListener('click', async () => {
    const email = emailInput.value;
    const pass = passInput.value;
    mensaje.innerText = "Cargando...";

    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        mensaje.innerText = "¡Cuenta creada con éxito!";
        alert("Bienvenido a M18 Studio");
    } catch (error) {
        mensaje.innerText = "Error: " + error.message;
    }
});