let resultado = '';
let numeroRandom = Math.floor(Math.random() * 100);

function verificarNumero() {
    let num = parseInt(document.getElementById('entrada').value);

    if (num <= numeroRandom) {
        if (num <= numeroRandom * 0.30) {
            resultado = 'Frío';
        } else if (num <= numeroRandom * 0.50) {
            resultado = 'Tibio, vas bien';
        } else if (num <= numeroRandom * 0.70) {
            resultado = 'Caliente, excelente';
        } else if (num <= numeroRandom * 0.99) {
            resultado = 'Demasiado caliente, sigue asi';
        } else if (num === numeroRandom) {
            resultado = 'Ganaste';
        }
    } else {
        if (num >= numeroRandom * 0.30) {
            resultado = 'Demasiado caliente, te pasaste';
        } else if (num >= numeroRandom * 0.50) {
            resultado = 'Caliente, regresa!';
        } else if (num >= numeroRandom * 0.70) {
            resultado = 'Tibio, te estas alejando';
        } else if (num >= numeroRandom * 0.99) {
            resultado = 'Frio, ya te alejaste';
        } else if (num === numeroRandom) {
            resultado = 'Ganaste';
        }
    }

    let random = document.getElementById('numero-random');
    random.innerHTML = resultado;
}


