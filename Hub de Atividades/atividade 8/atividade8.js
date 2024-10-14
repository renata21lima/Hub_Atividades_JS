// Função para calcular o imposto de renda com base no salário informado
function calcularImposto() {
    // Obter o valor do nome e do salário inseridos pelo usuário
    var nome = document.getElementById("nome").value;
    var salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario)) {
        // Verificar se o valor do salário é um número válido
        document.getElementById("resultado").innerText = "Por favor, insira um salário válido.";
        return;
    }

    var aliquota = 0; // Variável para armazenar a alíquota aplicável
    var imposto = 0;  // Variável para armazenar o valor do imposto a ser pago

    // Determinar a alíquota e o imposto com base no salário informado
    if (salario <= 1434) {
        aliquota = 0; // Isento
        imposto = 0;
    } else if (salario <= 2150) {
        aliquota = 7.5; // Alíquota de 7,5%
        imposto = salario * (aliquota / 100);
    } else if (salario <= 2866) {
        aliquota = 15; // Alíquota de 15%
        imposto = salario * (aliquota / 100);
    } else if (salario <= 3582) {
        aliquota = 22.5; // Alíquota de 22,5%
        imposto = salario * (aliquota / 100);
    } else {
        aliquota = 27.5; // Alíquota de 27,5%
        imposto = salario * (aliquota / 100);
    }

    // Exibir o resultado do cálculo do imposto
    var resultado = `Olá, ${nome}! Com um salário de R$${salario.toFixed(2)}, o imposto a ser pago é R$${imposto.toFixed(2)}, com uma alíquota de ${aliquota}%.`;
    document.getElementById("resultado").innerText = resultado;
}