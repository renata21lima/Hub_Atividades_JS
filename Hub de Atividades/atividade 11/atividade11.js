function numeroSoma() {
    console.log("Função numeroSoma foi chamada."); 
    var numero = parseInt(document.getElementById("numeroUsuario").value);

    if (isNaN(numero) || numero <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um número inteiro positivo.";
        return;
    }

    var resultado = calcularSoma(numero);

    document.getElementById("resultado").innerText = `A soma de 1 até ${numero} é ${resultado}.`;
}

function calcularSoma(n) {
    var soma = 0;
    for (var i = 1; i <= n; i++) {
        soma += i;
    }

    return soma;
}

