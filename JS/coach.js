function calcularCoach() {
    const elo = document.getElementById('elo').value
    const matches = document.getElementById('matches').value

    const precoPorAula = {
        1: 26.00, // Ferro
        2: 26.00, // Bronze
        3: 26.00, // Prata
        4: 32.00, // Ouro
        5: 32.00, // Platina
        6: 32.00, // Esmeralda
        7: 40.00, // Diamante
        8: 40.00  // Mestre
    };

    const eloAtualText = document.getElementById("elo").selectedOptions[0].text;
    const quantidadeAulaText = document.getElementById("matches").selectedOptions[0].text;

    const coachPrice = precoPorAula[elo] * matches;
    document.getElementById("price").innerText = `Preço: R$ ${coachPrice.toFixed(2)}`;

    whatsappButton.style.display = 'block';

    const message = `Opa! Quero contratar serviço de coach. O meu elo atual é ${eloAtualText} e quero ${quantidadeAulaText} aula(s) no valor de: R$${coachPrice.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    whatsappButton.onclick = function() {
        window.open(`https://wa.me/5516997486526?text=${encodedMessage}`, '_blank');
    };
}
