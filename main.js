function verificarMorango() {

    let resposta =
    document.getElementById("resposta").value;

    if (resposta == "Vitamina C" ||
        resposta == "vitamina c") {

        alert("Parabéns! Você acertou. O morango é rico em Vitamina C.");
    }

    else {

        alert("Resposta incorreta. O morango é rico em Vitamina C.");
    }
}

function verificarBolo() {

    let bolo =
    document.getElementById("bolo").value;

    if (bolo == "sim" ||
        bolo == "Sim") {

        alert("Ótimo! O bolo de morango com chantilly é uma delícia.");
    }

    else {

        alert("Tudo bem! Existem outras sobremesas com morango.");
    }
}

function verificarTorta() {

    let torta =
    document.getElementById("torta").value;

    if (torta == "morango" ||
        torta == "Morango") {

        alert("Correto! O principal ingrediente da torta é o morango.");
    }

    else {

        alert("Incorreto! O principal ingrediente da torta é o morango.");
    }
}