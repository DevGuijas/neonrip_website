const ironTierPrice = [8];
const bronzeTierPrice = [9.5];
const silverTierPrice = [12.5];
const goldTierPrice = [16.1];
const platinumTierPrice = [23.2];
const emeraldTierPrice = [46.0];
const diamondTierPrice = [70.0, 75.0, 80.0, 95.0]; // Preços personalizados para cada divisão do Diamante
const masterTierPrice = [550];
const gmmasterTierPrice = [830];

const jobType = document.getElementById('jobType');
const whatsappButton = document.getElementById('whatsappButton');

document.getElementById('submit').addEventListener('click', () => calcularPreco(0));
document.getElementById("eloAtual").addEventListener("change", atualizarEloDesejado);

let firstCalculation = true; // Variável para controlar a primeira chamada

function atualizarEloDesejado() {
    const eloAtual = parseInt(document.getElementById("eloAtual").value);
    const eloDesejadoSelect = document.getElementById("eloDesejado");

    const options = eloDesejadoSelect.options;

    for (let i = 0; i < options.length; i++) {
        if (parseInt(options[i].value) <= eloAtual) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

    if (parseInt(eloDesejadoSelect.value) <= eloAtual) {
        eloDesejadoSelect.value = "";
    }
}

function calcularPreco(t) {
    const eloTierPrice = [
        ...Array(4).fill(ironTierPrice[0]),
        ...Array(4).fill(bronzeTierPrice[0]),
        ...Array(4).fill(silverTierPrice[0]),
        ...Array(4).fill(goldTierPrice[0]),
        ...Array(4).fill(platinumTierPrice[0]),
        ...Array(4).fill(emeraldTierPrice[0]),
        diamondTierPrice[0], // Diamante 4 para 3
        diamondTierPrice[1], // Diamante 3 para 2
        diamondTierPrice[2], // Diamante 2 para 1
        diamondTierPrice[3], // Diamante 1 para Mestre
        masterTierPrice[0],
        gmmasterTierPrice[0], 0
    ];

    const eloAtual = parseInt(document.getElementById("eloAtual").value);
    const eloDesejado = parseInt(document.getElementById("eloDesejado").value);

    let jobPrice = 0;

    for (let i = eloAtual; i < eloDesejado; i++) {
        jobPrice += eloTierPrice[i];
    }

    if (jobPrice === 0) {
        alert("O seu elo desejado precisa ser maior do que o seu elo atual.");
        return;
    }

    document.getElementById("price").innerText = `Preço: R$ ${jobPrice.toFixed(2)}`;

    whatsappButton.style.display = 'block';

    const eloAtualText = document.getElementById("eloAtual").selectedOptions[0].text;
    const eloDesejadoText = document.getElementById("eloDesejado").selectedOptions[0].text;

    const message = `Opa! Quero contratar o serviço de SoloBoost. Meu elo atual é: ${eloAtualText} e quero chegar ao ${eloDesejadoText} no valor de: R$${jobPrice.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    whatsappButton.onclick = function () {
        window.open(`https://wa.me/5516997486526?text=${encodedMessage}`, '_blank');
    };
}
