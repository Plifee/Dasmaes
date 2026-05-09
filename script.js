const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Primeiro cria um fundo totalmente preenchido
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Agora desenha MUITOS confetes por cima
const colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "orange",
  "pink"
];

for (let i = 0; i < 15000; i++) {

  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;

  const width = Math.random() * 6 + 3;
  const height = Math.random() * 6 + 3;

  const color = colors[
    Math.floor(Math.random() * colors.length)
  ];

  ctx.fillStyle = color;

  ctx.fillRect(x, y, width, height);
}

// função para apagar
function erase(x, y) {
  ctx.globalCompositeOperation = "destination-out";

  ctx.beginPath();
  ctx.arc(x, y, 40, 0, Math.PI * 2);
  ctx.fill();
}

// suporte ao toque (celular)
canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();

  const touch = e.touches[0];
  erase(touch.clientX, touch.clientY);
});

// suporte ao mouse
canvas.addEventListener("mousemove", (e) => {
  if (e.buttons === 1) {
    erase(e.clientX, e.clientY);
  }
});