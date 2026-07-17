const bgMusic = document.getElementById('bgMusic');

window.onload = () => {
  const starsContainer = document.getElementById('stars');
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
  }

  setTimeout(() => { document.getElementById('p1-text1').classList.add('fade-in'); }, 800);
  setTimeout(() => { document.getElementById('p1-text2').classList.add('fade-in'); }, 2000);
  setTimeout(() => { document.getElementById('p1-intro-words').classList.add('fade-in'); }, 3200);
  setTimeout(() => { document.getElementById('btn-open').classList.add('fade-in'); }, 5500);

  setInterval(createPetal, 400);
};

function startJourney() {
  bgMusic.play().catch(e => console.log("Autoplay dicegah browser, diputar setelah klik berikutnya."));
  const p1 = document.getElementById('page1');
  p1.style.opacity = '0';
  setTimeout(() => {
    p1.classList.add('hidden');
    const main = document.getElementById('main-content');
    main.classList.remove('hidden');
    main.classList.add('fade-in');
    const p2 = document.getElementById('page2');
    p2.classList.remove('hidden');
    p2.classList.add('fade-in');
  }, 1000);
}

function nextPage(from, to) {
  document.getElementById(`page${from}`).classList.add('hidden');
  const toPage = document.getElementById(`page${to}`);
  toPage.classList.remove('hidden');
  toPage.classList.add('fade-in');
  if (to === 3) initSlider();
}

const loveThings = [
  "Aku suka kejujuran kamu yang selalu menenangkan hati.",
  "Aku suka caramu tersenyum manis saat menatapku.",
  "Aku suka perhatian-perhatian kecilmu yang sangat berharga.",
  "Aku suka caramu mendengarkan semua cerita random-ku.",
  "Aku suka kehangatan yang kamu bawa di setiap hari-hariku.",
  "Aku suka caramu membuatku selalu merasa dihargai.",
  "Aku suka bagaimana kamu selalu sabar menghadapiku.",
  "Aku suka caramu selalu berusaha melihat sisi baik dari segala hal.",
  "Aku suka binar matamu yang indah saat bercerita.",
  "Aku suka karena kamu adalah kamu, tanpa perlu berpura-pura. 🌻"
];
let currentSlide = 0;

function initSlider() { showSlide(); }

function showSlide() {
  const slideText = document.getElementById('slide-text');
  const slideNum = document.getElementById('slide-number');
  slideText.style.opacity = '0';
  setTimeout(() => {
    slideText.innerText = `❤️ ${currentSlide + 1}. ${loveThings[currentSlide]}`;
    slideNum.innerText = `${currentSlide + 1} / 10`;
    slideText.style.opacity = '1';
  }, 200);
}

function nextSlide() {
  if (currentSlide < loveThings.length - 1) {
    currentSlide++;
    showSlide();
  } else {
    nextPage(3, 4);
  }
}

function createPetal() {
  const container = document.getElementById('petals-container');
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.width = `${Math.random() * 15 + 10}px`;
  petal.style.height = `${Math.random() * 25 + 15}px`;
  petal.style.backgroundColor = Math.random() > 0.5 ? '#fbbf24' : '#f59e0b';
  petal.style.borderRadius = '0px 80% 0px 80%';
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${Math.random() * 4 + 4}s`;
  container.appendChild(petal);
  setTimeout(() => { petal.remove(); }, 8000);
}

function virtualHug(event) {
  for (let i = 0; i < 30; i++) {
    createHeart(event.clientX || window.innerWidth / 2, event.clientY || window.innerHeight / 2);
  }
  document.getElementById('btn-hug').style.display = 'none';
  typeWriter("I Love You, Princess... 👑❤️", 0);
}

function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart-particle text-3xl';
  heart.innerHTML = '❤️';
  const angle = Math.random() * Math.PI * 2;
  const velocity = Math.random() * 150 + 100;
  const tx = Math.cos(angle) * velocity;
  const ty = Math.sin(angle) * velocity - 100;
  heart.style.setProperty('--tx', `${tx}px`);
  heart.style.setProperty('--ty', `${ty}px`);
  heart.style.left = `${x - 15}px`;
  heart.style.top = `${y - 15}px`;
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 1500);
}

function typeWriter(text, i) {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 100);
  }
}
