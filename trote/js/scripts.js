function calcular(){
    // Vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe

    mascote = Number(document.getElementById("mascote").value)

    homenagem = Number(document.getElementById("homenagem").value)

    leite = Number(document.getElementById("leite").value)

    kit = Number(document.getElementById("kit").value)

    suplemento = Number(document.getElementById("suplemento").value)

    soma = (mascote) + (homenagem) + (2 * (leite)) 

    equipe = document.getElementById("equipe").value

    if (kit >= 97) {
        soma = soma + 5000 + ((kit - 97) * 30)
    }
    else if (kit >= 78) {
        soma = soma + 4000 + ((kit - 78) * 30)
    }
    else if (kit >= 49) {
        soma = soma + 2500 + ((kit - 49) * 30)
    }
    else if (kit >= 19) {
        soma = soma + 1000 + ((kit - 19) * 30)
    }

    document.getElementById("soma").innerHTML = `A soma é ${soma}`

}