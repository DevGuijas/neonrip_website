let ultimoElo = document.querySelector(".elo-img");
let selectUltimoElo = document.querySelector(".elo-select");

const elos = [
    { value: "1", label: "Mestre", alt: "Mestre" },
    { value: "2", label: "GraoMestre", alt: "GrãoMestre" },
    { value: "3", label: "Desafiante", alt: "Desafiante" }
];

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

function calcularManutencao() {
    const elo = document.getElementById('elo').value
    const matches = document.getElementById('matches').value

    const precoPorManutencao = {
        1: 370.00,  // Mestre
        2: 550.00,  // Grão mestre
        3: 900.00  // Desafiante
    };

    const eloAtualText = document.getElementById("elo").selectedOptions[0].text;
    const diasDeManutencaoText = document.getElementById("matches").selectedOptions[0].text;

    let vitoriasPrice = precoPorManutencao[elo];

    if (matches === "1") {
        vitoriasPrice = vitoriasPrice / 2;
    }

    document.getElementById("price").innerText = `Preço: R$ ${vitoriasPrice.toFixed(2)}`;

    whatsappButton.style.display = 'block';

    const message = `Opa! Quero contratar o serviço de manutenção de elo. O meu elo atual é ${eloAtualText} e quero ${diasDeManutencaoText} de manutenção no valor de: R$${vitoriasPrice.toFixed(2)}.`;
    const encodedMessage = encodeURIComponent(message);
    
    // Configura o clique do botão do WhatsApp
    whatsappButton.onclick = function() {
        window.open(`https://wa.me/5516997486526?text=${encodedMessage}`, '_blank');
    };
}
