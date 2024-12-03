let ultimoElo = document.querySelector(".elo-img");
let selectUltimoElo = document.querySelector(".elo-select");
let eloDesejadoImg = document.querySelector("#elo-desejado-img");
let eloDesejadoSelect = document.querySelector("#eloDesejado");


const elos = [
    { value: "0", label: "Ferro 4", alt: "Ferro 4" },
    { value: "1", label: "Ferro 3", alt: "Ferro 3" },
    { value: "2", label: "Ferro 2", alt: "Ferro 2" },
    { value: "3", label: "Ferro 1", alt: "Ferro 1" },
    { value: "4", label: "Bronze 4", alt: "Bronze 4" },
    { value: "5", label: "Bronze 3", alt: "Bronze 3" },
    { value: "6", label: "Bronze 2", alt: "Bronze 2" },
    { value: "7", label: "Bronze 1", alt: "Bronze 1" },
    { value: "8", label: "Prata 4", alt: "Prata 4" },
    { value: "9", label: "Prata 3", alt: "Prata 3" },
    { value: "10", label: "Prata 2", alt: "Prata 2" },
    { value: "11", label: "Prata 1", alt: "Prata 1" },
    { value: "12", label: "Ouro 4", alt: "Ouro 4" },
    { value: "13", label: "Ouro 3", alt: "Ouro 3" },
    { value: "14", label: "Ouro 2", alt: "Ouro 2" },
    { value: "15", label: "Ouro 1", alt: "Ouro 1" },
    { value: "16", label: "Platina 4", alt: "Platina 4" },
    { value: "17", label: "Platina 3", alt: "Platina 3" },
    { value: "18", label: "Platina 2", alt: "Platina 2" },
    { value: "19", label: "Platina 1", alt: "Platina 1" },
    { value: "20", label: "Esmeralda 4", alt: "Esmeralda 4" },
    { value: "21", label: "Esmeralda 3", alt: "Esmeralda 3" },
    { value: "22", label: "Esmeralda 2", alt: "Esmeralda 2" },
    { value: "23", label: "Esmeralda 1", alt: "Esmeralda 1" },
    { value: "24", label: "Diamante 4", alt: "Diamante 4" },
    { value: "25", label: "Diamante 3", alt: "Diamante 3" },
    { value: "26", label: "Diamante 2", alt: "Diamante 2" },
    { value: "27", label: "Diamante 1", alt: "Diamante 1" },
    { value: "28", label: "Mestre", alt: "Mestre" },
    { value: "29", label: "GraoMestre", alt: "Grão Mestre" },
    { value: "30", label: "Desafiante", alt: "Desafiante" }
]

selectUltimoElo.addEventListener("change", (e) => {
    let valorSelecionado = e.target.value;

    ultimoElo.textContent = valorSelecionado;
    elos.forEach((item) => {

        if(item.value === valorSelecionado) {
            ultimoElo.src = `./assets/${item.label.split(' ')[0]}.png`;
            ultimoElo.alt =  item.alt;

        }
    })
});

eloDesejadoSelect.addEventListener("change", (e) => {
    let valorSelecionado = e.target.value;

    ultimoElo.textContent = valorSelecionado;
    elos.forEach((item) => {

        if(item.value === valorSelecionado) {
                eloDesejadoImg.src = `./assets/${item.label.split(' ')[0]}.png`;
                eloDesejadoImg.alt =  item.label;
        }
    })
});

