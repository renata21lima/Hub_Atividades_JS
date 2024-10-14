function parImpar() {
    const numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

    if (isNaN(numeroUsuario)) {
        alert("Por favor, insira um número inteiro válido."); // Verifica se o valor é um número válido
    } else {
        if (numeroUsuario % 2 === 0) { // Verifica se é par
            alert(`O número ${numeroUsuario} é par.`); 
        } else { // Caso contrário, é ímpar
            alert(`O número ${numeroUsuario} é ímpar.`);
        }
    }
}