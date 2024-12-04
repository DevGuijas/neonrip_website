const ironTierPrice = [8, 14.3];
const bronzeTierPrice = [9.5, 16.2];
const silverTierPrice = [12.5, 19.3];
const goldTierPrice = [15.1, 23.2];
const platinumTierPrice = [21.2, 35.3];
const emeraldTierPrice = [40.2, 72.2];
const diamondTierPrice = [70.10, 179.5];
const masterTierPrice = [540];
const gmmasterTierPrice = [830];

const jobType = document.getElementById('jobType');
const whatsappButton = document.getElementById('whatsappButton');

document.getElementById('submit').addEventListener('click', () => calcularPreco(1));
document.getElementById("eloAtual").addEventListener("change", atualizarEloDesejado);

let firstCalculation = true; // Variável para controlar a primeira chamada

function atualizarEloDesejado() {
    const eloAtual = parseInt(document.getElementById("eloAtual").value);
    const eloDesejadoSelect = document.getElementById("eloDesejado");

    // Obtém todas as opções de eloDesejado
    const options = eloDesejadoSelect.options;

    // Percorre as opções, mostrando ou ocultando conforme necessário
    for (let i = 0; i < options.length; i++) {
        if (parseInt(options[i].value) <= eloAtual) {
            options[i].style.display = "none"; // Oculta opções iguais ou inferiores
        } else {
            options[i].style.display = "block"; // Mostra opções superiores
        }
    }

    // Ajusta o valor de eloDesejado caso esteja em um valor inválido
    if (parseInt(eloDesejadoSelect.value) <= eloAtual) {
        eloDesejadoSelect.value = "";
    }
}

function calcularPreco(t) {
    const eloTierPrice = [
        ironTierPrice[t], ironTierPrice[t], ironTierPrice[t], ironTierPrice[t],
        bronzeTierPrice[t], bronzeTierPrice[t], bronzeTierPrice[t], bronzeTierPrice[t],
        silverTierPrice[t], silverTierPrice[t], silverTierPrice[t], silverTierPrice[t], 
        goldTierPrice[t], goldTierPrice[t], goldTierPrice[t], goldTierPrice[t], 
        platinumTierPrice[t], platinumTierPrice[t], platinumTierPrice[t], platinumTierPrice[t], 
        emeraldTierPrice[t], emeraldTierPrice[t], emeraldTierPrice[t], emeraldTierPrice[t], 
        diamondTierPrice[t], diamondTierPrice[t], diamondTierPrice[t], diamondTierPrice[t],
        masterTierPrice[t],
        gmmasterTierPrice[t], 0
    ];

    const eloAtual = parseInt(document.getElementById("eloAtual").value);
    const eloDesejado = parseInt(document.getElementById("eloDesejado").value);
  
    let jobPrice = 0;
    
    for (let i = eloAtual; i < eloDesejado; i++) {
        if (i === 24) {
            jobPrice += eloTierPrice[i];
        } else if (i === 25) {
            jobPrice += eloTierPrice[i] * 1.005;
        } else if (i === 26) {
            jobPrice += eloTierPrice[i] * 1.01;
        } else if (i % 4 === 3) {
            jobPrice += eloTierPrice[i] * 1.05;
        } else {
            jobPrice += eloTierPrice[i];
        }
    }

    if (jobPrice === 0) {
        alert("O seu elo desejado precisa ser maior do que o seu elo atual.");
        return;
    }

    document.getElementById("price").innerText = `Preço: R$ ${jobPrice.toFixed(2)}`;
  
    whatsappButton.style.display = 'block';

    // Pega o texto da opção selecionada
    const eloAtualText = document.getElementById("eloAtual").selectedOptions[0].text; // Texto do elo atual
    const eloDesejadoText = document.getElementById("eloDesejado").selectedOptions[0].text; // Texto do elo desejado

    // Atualiza o link do WhatsApp
    const message = `Opa! Quero contratar o serviço de DuoBoost. Meu elo atual é: ${eloAtualText} e quero chegar ao ${eloDesejadoText} no valor de: R$${jobPrice.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    whatsappButton.onclick = function() {
        window.open(`https://wa.me/5516997486526?text=${encodedMessage}`, '_blank');
    };
}
