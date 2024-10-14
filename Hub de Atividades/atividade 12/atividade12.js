// Número aleatório entre 0 e 100
let numeroSecreto = Math.floor(Math.random() * 101); // Gera um número entre 0 e 100
let tentativas = 0; // Contador de tentativas

function chutar() {
    // Obtém o valor do campo de entrada do usuário
    let chute = parseInt(document.getElementById("numeroUsuario").value);

    // Verifica se o chute é um número válido
    if (isNaN(chute) || chute < 0 || chute > 100) {
        document.getElementById("resultado").innerText = "Por favor, insira um número entre 0 e 100.";
        return;
    }

    // Incrementa o contador de tentativas
    tentativas++;

    // Verifica se o chute é maior, menor ou igual ao número secreto
    if (chute < numeroSecreto) {
        document.getElementById("resultado").innerText = `Seu chute é menor do que o número secreto. Tentativas: ${tentativas}`;
    } else if (chute > numeroSecreto) {
        document.getElementById("resultado").innerText = `Seu chute é maior do que o número secreto. Tentativas: ${tentativas}`;
    } else {
        document.getElementById("resultado").innerText = `Parabéns! Você acertou o número secreto em ${tentativas} tentativas!`;
    }
}
