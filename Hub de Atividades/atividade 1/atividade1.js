let numeroParcelas = 0;

function selecionarParcelas(num) {
    const botoes = document.querySelectorAll('.form-group button');
    botoes.forEach(b => b.classList.remove('active'));

    const botaoSelecionado = document.getElementById(`parcela-${num}`);
    botaoSelecionado.classList.add('active');

    numeroParcelas = num;
}

function calcularParcelas() {
    const totalCompra = parseFloat(document.getElementById("total-compra").value);

    if (isNaN(totalCompra) || totalCompra <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um valor de compra válido.";
        return;
    }

    if (numeroParcelas === 0) {
        document.getElementById("resultado").textContent = "Por favor, selecione o número de parcelas.";
        return;
    }

    let juros = 0;

    if (numeroParcelas === 1) {
        juros = 0.00;
    } else if (numeroParcelas === 2) {
        juros = 0.03;
    } else if (numeroParcelas === 4) {
        juros = 0.07;
    }

    const totalComJuros = totalCompra * (1 + juros);
    const valorParcela = totalComJuros / numeroParcelas;

    document.getElementById("resultado").textContent = `Cada parcela será de R$ ${valorParcela.toFixed(2)}`;
}