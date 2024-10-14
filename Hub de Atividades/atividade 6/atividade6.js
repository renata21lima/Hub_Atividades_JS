let opcaoSelecionada = 0; 

function selecionarOpcao(codigo, descricao) {
    opcaoSelecionada = codigo; // 
    alert(`Opção selecionada: ${descricao}`); 
}

function Calcule() {
    const nomeProduto = document.getElementById("nomeProduto").value; 
    const valorProduto = parseFloat(document.getElementById("valor").value); 

    if (!nomeProduto || isNaN(valorProduto)) {
        alert("Por favor, insira um nome de produto e um valor numérico válido.");
        return; 
    }

    let valorFinal = 0; 
    let descricao = ""; 

    switch (opcaoSelecionada) {
        case 1:
            valorFinal = valorProduto * 0.90; 
            descricao = "À vista com 10% de desconto";
            break;
        case 2:
            valorFinal = valorProduto * 0.95; 
            descricao = "Cartão com 5% de desconto";
            break;
        case 3:
            valorFinal = valorProduto * 1.10; 
            descricao = "Parcelado com 10% de juros";
            break;
        default:
            alert("Por favor, selecione uma condição de pagamento.");
            return; 
    }
    document.getElementById("resultado").textContent = `Produto: ${nomeProduto}. Valor Real: R$ ${valorProduto.toFixed(2)}. Valor a ser pago: R$ ${valorFinal.toFixed(2)} (${descricao}).`;
}