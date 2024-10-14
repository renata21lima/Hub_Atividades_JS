function numeroFatorial() {
    var numero = parseInt(document.getElementById("numeroUsuario").value);
    
    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um número inteiro positivo ou zero.";
        return;
    }

    var resultado = calcularFatorial(numero);
    document.getElementById("resultado").innerText = `Fatorial de ${numero} é ${resultado}`;
}


function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    
    var resultado = 1; 
    for (var i = 2; i <= n; i++) {
        resultado *= i; 
    }

    return resultado; 
}