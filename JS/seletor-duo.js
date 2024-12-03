let ultimoElo = document.querySelector(".elo-img");
let selectUltimoElo = document.querySelector(".elo-select");
let eloDesejadoImg = document.querySelector("#elo-desejado-img");
let eloDesejadoSelect = document.querySelector("#eloDesejado");


const elos = [
    { value: "0", label: "Ferro 4" },
    { value: "1", label: "Ferro 3" },
    { value: "2", label: "Ferro 2" },
    { value: "3", label: "Ferro 1" },
    { value: "4", label: "Bronze 4" },
    { value: "5", label: "Bronze 3" },
    { value: "6", label: "Bronze 2" },
    { value: "7", label: "Bronze 1" },
    { value: "8", label: "Prata 4" },
    { value: "9", label: "Prata 3" },
    { value: "10", label: "Prata 2" },
    { value: "11", label: "Prata 1" },
    { value: "12", label: "Ouro 4" },
    { value: "13", label: "Ouro 3" },
    { value: "14", label: "Ouro 2" },
    { value: "15", label: "Ouro 1" },
    { value: "16", label: "Platina 4" },
    { value: "17", label: "Platina 3" },
    { value: "18", label: "Platina 2" },
    { value: "19", label: "Platina 1" },
    { value: "20", label: "Esmeralda 4" },
    { value: "21", label: "Esmeralda 3" },
    { value: "22", label: "Esmeralda 2" },
    { value: "23", label: "Esmeralda 1" },
    { value: "24", label: "Diamante 4" },
    { value: "25", label: "Diamante 3" },
    { value: "26", label: "Diamante 2" },
    { value: "27", label: "Diamante 1" },
    { value: "28", label: "Mestre" },
    { value: "29", label: "Grão Mestre" },
    { value: "30", label: "Desafiante" }
]

selectUltimoElo.addEventListener("change", (e) => {
    let valorSelecionado = e.target.value;

    ultimoElo.textContent = valorSelecionado;
    elos.forEach((item) => {

        if(item.value === valorSelecionado) {
            ultimoElo.setAttribute("src", `./assets/${item.label.split(' ')[0]}.png`);
            ultimoElo.setAttribute("alt", item.label);
        }
    })
});

eloDesejadoSelect.addEventListener("change", (e) => {
    let valorSelecionado = e.target.value;

    ultimoElo.textContent = valorSelecionado;
    elos.forEach((item) => {

        if(item.value === valorSelecionado) {
            if(valorSelecionado == 29) {
                eloDesejadoImg.setAttribute("src", `./assets/${item.label}.png`);
                eloDesejadoImg.setAttribute("alt", item.label);
            } else {
                eloDesejadoImg.setAttribute("src", `./assets/${item.label.split(' ')[0]}.png`);
                eloDesejadoImg.setAttribute("alt", item.label);
            }

        }
    })
});

