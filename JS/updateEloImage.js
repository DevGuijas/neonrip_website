function updateEloImage() {
  // Mapeamento dos elos para os caminhos das imagens
  const eloImages = {
    0: "./assets/Ferro.png",
    1: "./assets/Ferro.png",
    2: "./assets/Ferro.png",
    3: "./assets/Ferro.png",
    4: "./assets/Bronze.png",
    5: "./assets/Bronze.png",
    6: "./assets/Bronze.png",
    7: "./assets/Bronze.png",
    8: "./assets/Prata.png",
    9: "./assets/Prata.png",
    10: "./assets/Prata.png",
    11: "./assets/Prata.png",
    12: "./assets/Ouro.png",
    13: "./assets/Ouro.png",
    14: "./assets/Ouro.png",
    15: "./assets/Ouro.png",
    16: "./assets/Platina.png",
    17: "./assets/Platina.png",
    18: "./assets/Platina.png",
    19: "./assets/Platina.png",
    20: "./assets/Esmeralda.png",
    21: "./assets/Esmeralda.png",
    22: "./assets/Esmeralda.png",
    23: "./assets/Esmeralda.png",
    24: "./assets/Diamante.png",
    25: "./assets/Diamante.png",
    26: "./assets/Diamante.png",
    27: "./assets/Diamante.png",
    28: "./assets/Mestre.png",
    29: "./assets/GraoMestre.png",
    30: "./assets/Desafiante.png",
  };

  // Obtém o valor selecionado no dropdown
  const eloAtual = document.getElementById("eloAtual").value;

  // Atualiza o atributo `src` da imagem
  const eloImage = document.getElementById("eloImage");
  eloImage.src = eloImages[eloAtual];
}