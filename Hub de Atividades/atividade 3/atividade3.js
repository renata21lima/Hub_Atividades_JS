function maiorOuIgual() {
    const numero1 = parseInt(document.getElementById("numeroUsuario1").value);
    const numero2 = parseInt(document.getElementById("numeroUsuario2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira valores inteiros válidos.");
        return;
    }

    if (numero1 > numero2) {
        alert(`O número ${numero1} é maior que o número ${numero2}.`);
    } else if (numero1 < numero2) {
        alert(`O número ${numero2} é maior que o número ${numero1}.`);
    } else {
        alert("Os dois números são iguais.");
    }
}