function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = 0;
    
    // Verifica se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o resultado com base na operação selecionada
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) { // Evita divisão por zero
                document.getElementById("resultado").innerText = "Divisão por zero não é permitida.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            document.getElementById("resultado").innerText = "Operação inválida.";
            return;
    }

    // Mostra o resultado formatado
    document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2);
}
