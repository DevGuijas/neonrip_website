// const ironTierPrice =       [7.5,  15];
// const bronzeTierPrice =     [9.5,  16];
// const silverTierPrice =     [12.5, 18];
// const goldTierPrice =       [17,   24];
// const platinumTierPrice =   [24.5, 40];
// const emeraldTierPrice =    [45,   68];
// const diamondTierPrice =    [73.5, 150.5]; 

// const jobType = document.getElementById('jobType');

// document.getElementById('submit').addEventListener('click', () => calcularPreco(jobType.value))

// function calcularPreco(t) {
//     const eloTierPrice = [  ironTierPrice[t], ironTierPrice[t], ironTierPrice[t], ironTierPrice[t],
//                             bronzeTierPrice[t], bronzeTierPrice[t], bronzeTierPrice[t], bronzeTierPrice[t],
//                             silverTierPrice[t], silverTierPrice[t], silverTierPrice[t], silverTierPrice[t], 
//                             goldTierPrice[t], goldTierPrice[t], goldTierPrice[t], goldTierPrice[t], 
//                             platinumTierPrice[t], platinumTierPrice[t], platinumTierPrice[t], platinumTierPrice[t], 
//                             emeraldTierPrice[t], emeraldTierPrice[t], emeraldTierPrice[t], emeraldTierPrice[t], 
//                             diamondTierPrice[t], diamondTierPrice[t], diamondTierPrice[t], diamondTierPrice[t], 0
//                     ];

//     const eloAtual = document.getElementById("eloAtual").value;
//     const eloDesejado = document.getElementById("eloDesejado").value;

//     const eloPath = eloTierPrice.filter((_, prices) => prices >= eloAtual && prices < eloDesejado);
    
//     const jobPrice = eloPath.reduce((price, tier) => price + tier, 0);

//     document.getElementById("price").innerText = `Preço: R$ ${jobPrice.toFixed(2)}`; 
// }   
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

document.getElementById('submit').addEventListener('click', () => calcularPreco(0));

let firstCalculation = true; // Variável para controlar a primeira chamada

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

    document.getElementById("price").innerText = `Preço: R$ ${jobPrice.toFixed(2)}`;
  
    whatsappButton.style.display = 'block';

    // Pega o texto da opção selecionada
    const eloAtualText = document.getElementById("eloAtual").selectedOptions[0].text; // Texto do elo atual
    const eloDesejadoText = document.getElementById("eloDesejado").selectedOptions[0].text; // Texto do elo desejado

    // Atualiza o link do WhatsApp
    const message = `Opa, Quero contratar o SoloBoost. Meu elo atual é: ${eloAtualText} e quero chegar ao ${eloDesejadoText}, o valor é: R$${jobPrice.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    whatsappButton.onclick = function() {
        window.open(`https://wa.me/5516997486526?text=${encodedMessage}`, '_blank');
    };
}

