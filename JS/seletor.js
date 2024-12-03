let ultimoElo = document.querySelector(".elo-img");
let selectUltimoElo = document.querySelector(".elo-select");

const elos = [
    { value: "0", label: "Ferro", alt: "Ferro" },
    { value: "1", label: "Ferro", alt: "Ferro" },
    { value: "2", label: "Bronze", alt: "Bronze" },
    { value: "3", label: "Prata", alt: "Prata" },
    { value: "4", label: "Ouro", alt: "Ouro" },
    { value: "5", label: "Platina", alt: "Platina" },
    { value: "6", label: "Esmeralda", alt: "Esmeralda" },
    { value: "7", label: "Diamante", alt: "Diamante" },
    { value: "8", label: "Mestre", alt: "Mestre" },
    { value: "9", label: "GraoMestre", alt: "GrãoMestre" },
    { value: "10", label: "Desafiante", alt: "Desafiante" }
]


selectUltimoElo.addEventListener("change", (e) => {
    let valorSelecionado = e.target.value;

    ultimoElo.textContent = valorSelecionado;
    elos.forEach((item) => {

        if(item.value === valorSelecionado) {
            ultimoElo.src = `./assets/${item.label}.png`;
            ultimoElo.alt =  item.alt;
        }
    })
});