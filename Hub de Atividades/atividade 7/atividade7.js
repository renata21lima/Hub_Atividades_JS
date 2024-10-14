function Calcule() {
    // Obter os valores do formulário
    const nomeProduto = document.getElementById("nomeProduto").value;
    const altura = parseFloat(document.getElementById("altura").value); // ID correto para altura
    const peso = parseFloat(document.getElementById("peso").value); // ID correto para peso
    const sexo = document.querySelector('input[name="sexo"]:checked'); // Verificar se um rádio está selecionado

    // Verificar se os valores são válidos
    if (!nomeProduto || isNaN(altura) || isNaN(peso) || !sexo) { // Verifica se o sexo foi selecionado
        alert("Por favor, insira valores válidos e selecione o sexo.");
        return; // Interrompe a função se houver erro
    }

    const imc = peso / (altura * altura); // Calcular o IMC

    // Determinar a faixa de IMC com base no sexo
    let faixa = '';
    const sexoValue = sexo.value; // Obter o valor do rádio selecionado

    if (sexoValue === 'Masculino') {
        if (imc < 20.7) {
            faixa = "Abaixo do Peso";
        } else if (imc >= 20.7 && imc <= 26.4) {
            faixa = "Peso Normal";
        } else if (imc > 26.4 && imc <= 27.8) {
            faixa = "Marginalmente Acima do Peso";
        } else if (imc > 27.8 && imc <= 31.1) {
            faixa = "Acima do Peso Ideal";
        } else {
            faixa = "Obeso";
        }
    } else if (sexoValue === 'Feminino') {
        if (imc < 19.1) {
            faixa = "Abaixo do Peso";
        } else if (imc >= 19.1 && imc <= 25.8) {
            faixa = "Peso Normal";
        } else if (imc >= 25.8 && imc <= 27.3) {
            faixa = "Marginalmente Acima do Peso";
        } else if (imc >= 27.3 && imc <= 32.3) {
            faixa = "Acima do Peso Ideal";
        } else {
            faixa = "Obeso";
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Nome: ${nomeProduto}, IMC: ${imc.toFixed(2)}, Faixa: ${faixa}.`;
}
