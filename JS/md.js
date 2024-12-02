const unranked = 20.5 / 5;
const iron = 13.5 / 5;
const bronze = 16.5 / 5;
const silver = 18.3 / 5;
const gold = 21.8 / 5;
const platinum = 29.5 / 5;
const emerald = 36 / 5;
const diamond = 39.80 / 5;
const master = 57.5 / 5;
const grandMaster = 110.80 / 5;
const challenger = 176.30 / 5;


function calcularMd(){
    const pastElo = [unranked, iron, bronze, silver, gold, platinum, emerald, diamond, master, grandMaster, challenger]
    const elo = document.getElementById('elo').value
    const matches = document.getElementById('matches').value
    const mdPrice = pastElo[elo] * matches
    document.getElementById("price").innerText = `Preço: R$ ${mdPrice.toFixed(2)}`;

    whatsappButton.style.display = 'block';

    const eloAtualText = document.getElementById("elo").selectedOptions[0].text; // Texto do elo atual
    const eloDesejadoText = document.getElementById("matches").selectedOptions[0].text; // Texto do elo desejado

    const message = `Opa, Quero contratar para MD5, meu último elo é ${eloAtualText} e quero que jogue ${eloDesejadoText} partidas, o valor é: R$${mdPrice.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    whatsappButton.onclick = function() {
        window.open(`https://wa.me/5516997486526?text=${encodedMessage}`, '_blank');
    };
}
