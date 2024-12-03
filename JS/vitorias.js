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
    { value: "8", label: "Diamante", alt: "Diamante" },
    { value: "9", label: "Diamante", alt: "Diamante" },
    { value: "10", label: "Diamante", alt: "Diamante" },
    { value: "11", label: "Mestre", alt: "Mestre" },
    { value: "12", label: "GraoMestre", alt: "GrãoMestre" },
    { value: "13", label: "Desafiante", alt: "Desafiante" }
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

function calcularVitorias() {
    const elo = document.getElementById('elo').value
    const matches = document.getElementById('matches').value

    const precoPorAula = {
        1: 3.00, // Ferro
        2: 3.00, // Bronze
        3: 3.20, // Prata
        4: 4.00, // Ouro
        5: 7.00, // Platina
        6: 9.50, // Esmeralda
        7: 12.50, // Diamante 4
        8: 14.50, // Diamante 3
        9: 15.00, // Diamante 2
        10: 17.50, // Diamante 1
        11: 40.00,  // Mestre
        12: 60.00,  // Grão mestre
        13: 105.00  // Desafiante
    };

    const eloAtualText = document.getElementById("elo").selectedOptions[0].text;
    const quantidadeVitoriasText = document.getElementById("matches").selectedOptions[0].text;

    const vitoriasPrice = precoPorAula[elo] * matches;
    document.getElementById("price").innerText = `Preço: R$ ${vitoriasPrice.toFixed(2)}`;

    whatsappButton.style.display = 'block';

    const message = `Opa! Quero contratar o serviço de compra de vitórias. O meu elo atual é ${eloAtualText} e quero ${quantidadeVitoriasText} vitória(s) no valor de: R$${vitoriasPrice.toFixed(2)}.`;
    const encodedMessage = encodeURIComponent(message);
    whatsappButton.onclick = function() {
        window.open(`https://wa.me/5516997486526?text=${encodedMessage}`, '_blank');
    };
}
