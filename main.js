function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    try {
        elemento.play();
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Seletor inválido! Verifique se ele existe e se é está associado a tag <audio>");
        }
    }
}

const listaDeTecla = document.querySelectorAll(".tecla")

for (let index = 0; index < listaDeTecla.length; index++) {
    const tecla = listaDeTecla[index];
    const tipoDeTecla = tecla.classList[1];
    const idAudio = `#som_${tipoDeTecla}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        const pressedKey = event.code;
        console.log(pressedKey)
        if (pressedKey === "Space" || pressedKey === "Enter") {
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    }
}
