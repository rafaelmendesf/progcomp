function calcular(){
    // Vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let mascote, homenagem

    mascote = document.getElementById("mascote").value

    homenagem = document.getElementById("homenagem").value

    let soma = Number(mascote) + Number(homenagem)
    alert(soma)

    document.getElementById("soma").innerHTML = `A soma é ${soma}`

}