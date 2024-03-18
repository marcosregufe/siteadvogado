const botaoWhatsapp = document.querySelector(".botao-whatsapp");

// Animação ao aparecer
botaoWhatsapp.style.opacity = 0;
setTimeout(() => {
  botaoWhatsapp.style.opacity = 1;
}, 500);

// Mostrar/ocultar em determinadas páginas
if (window.location.pathname === "/contato") {
  botaoWhatsapp.style.display = "block";
} else {
  botaoWhatsapp.style.display = "none";
}
