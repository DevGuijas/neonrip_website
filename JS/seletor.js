let ultimoElo = document.querySelector(".elo-img");
let selectUltimoElo = document.querySelector(".elo-select");

const elos = [
    { value: "0", label: "Ferro" },
    { value: "1", label: "Ferro" },
    { value: "2", label: "Bronze" },
    { value: "3", label: "Prata" },
    { value: "4", label: "Ouro" },
    { value: "5", label: "Platina" },
    { value: "6", label: "Esmeralda" },
    { value: "7", label: "Diamante" },
    { value: "8", label: "Mestre" },
    { value: "9", label: "Grão Mestre" },
    { value: "10", label: "Desafiante" }
]


selectUltimoElo.addEventListener("change", (e) => {
    let valorSelecionado = e.target.value;

    ultimoElo.textContent = valorSelecionado;
    elos.forEach((item) => {

        if(item.value === valorSelecionado) {
            ultimoElo.setAttribute("src", `../assets/${item.label}.png`);
            ultimoElo.setAttribute("alt", item.label);
        }
    })
});
