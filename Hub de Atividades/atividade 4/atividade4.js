function calcularArea() {
    const numeroBase = parseFloat(document.getElementById("numeroBase").value); 
    const numeroAltura = parseFloat(document.getElementById("numeroAltura").value); 

    if (isNaN(numeroBase) || isNaN(numeroAltura)) {
        alert("Por favor, insira valores numéricos válidos."); 
        return; 
    }

    const area = numeroBase * numeroAltura;
    document.getElementById("resultado").textContent = `A área é ${area.toFixed(2)}.`; 
}
