function calcularMedia() {
    const nota1 = parseInt(document.getElementById("nota1").value); 
    const nota2 = parseInt(document.getElementById("nota2").value); 
    const nota3 = parseInt(document.getElementById("nota3").value); 

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ) {
        alert("Por favor, insira valores numéricos válidos."); 
        return; 
    }

    const media = ((nota1 + nota2 + nota3)/3);

    if (media >=6){
        document.getElementById("resultado").textContent = `A média é ${media.toFixed(2)}, Aprovado.`; 
    }
    else if (media >=3 && 6< media){
        document.getElementById("resultado").textContent = `A média é ${media.toFixed(2)}, Recuperação.`;     
    }
    else if (media <3){
        document.getElementById("resultado").textContent = `A média é ${media.toFixed(2)}, Reprovado.`;     
    }
}