// Typewriter effect for apology text
const apologyMessage = "Meri pyaari Meiko, I’m really sorry for being a jerk😔 I should have communicated better, and I regret hurting you💔 Please maaf karde yaar💕 You mean so much to me and it sucks hurting you and it feels like hell... I love you🌸";
const textElement = document.getElementById("apology-text");

let i = 0;
function typeWriter() {
  if (i < apologyMessage.length) {
    textElement.innerHTML += apologyMessage.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

// Floating emojis
const emojis = ["🌸", "💖", "🌷", "🌺", "💕", "🐱", "🐹", "🐼", "🐰", "💐", "🌻", "💞"];
const emojiContainer = document.getElementById("emoji-container");

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = 4 + Math.random() * 4 + "s";
  emojiContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 8000);
}
setInterval(createEmoji, 400);

// Copy message
function copyMessage() {
  navigator.clipboard.writeText(apologyMessage).then(() => {
    alert("Message copied 💕");
  });
}

// Edit message
function editMessage() {
  let newMessage = prompt("Edit the apology message:", apologyMessage);
  if (newMessage) {
    textElement.innerHTML = "";
    i = 0;
    apologyMessage = newMessage; // Reassign
    typeWriter();
  }
}

// Animal sounds
const sounds = {
  cat: "meow.mp3",
  hamster: "squeak.mp3",
  panda: "panda.mp3",
  bunny: "hop.mp3"
};

Object.keys(sounds).forEach(animal => {
  document.getElementById(animal).addEventListener("click", () => {
    new Audio("sounds/" + sounds[animal]).play();
  });
});

// Forgive button popup
document.getElementById("forgive-btn").addEventListener("click", () => {
  alert("I forgive you 💕");
  document.getElementById("image-popup").style.display = "block";
});

// Close popup
document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("image-popup").style.display = "none";
});

window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  if (bgMusic) {
    bgMusic.volume = 0.1; // 20% volume
  }
});