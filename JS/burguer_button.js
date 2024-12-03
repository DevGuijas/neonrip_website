const burguer = document.querySelector(".burguer");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-button");

burguer.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show"); // Exibe o modal
    burguer.classList.add("hidden"); // Oculta o botão burguer
});

close.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("show"); // Esconde o modal com animação
    setTimeout(() => {
        burguer.classList.remove("hidden"); // Mostra o botão burguer após a animação
    }, 200); // 300ms é o tempo da transição definido no CSS
});
