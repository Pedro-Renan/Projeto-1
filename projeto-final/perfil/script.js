console.log("Funcionou!");

const nome = document.querySelector("#nome");
nome.textContent = "Olá, eu sou o Pedro Renan 👋";

const botaoTema = document.querySelector("#btn-tema");
const body = document.querySelector("body");
const iconeTema = document.querySelector("#toggle-icone");
const textoTema = document.querySelector("#toggle-texto");

botaoTema.addEventListener("click", () => {
  body.classList.toggle("modo-escuro");
  const ativo = body.classList.contains("modo-escuro");
  iconeTema.textContent = ativo ? "☀️" : "🌙";
  textoTema.textContent = ativo ? "Modo claro" : "Modo escuro";
  botaoTema.setAttribute("aria-pressed", ativo);
});

const fotoPerfil = document.querySelector("#foto-perfil");

fotoPerfil.addEventListener("mouseover", () => {
  fotoPerfil.style.transform = "scale(1.1)";
});

fotoPerfil.addEventListener("mouseout", () => {
  fotoPerfil.style.transform = "scale(1)";
});

const relogio = document.querySelector("#relogio");

function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");
  relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
