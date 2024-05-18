
const hireBtn = document.getElementById('hireBtn');
const contactForm = document.getElementById('contactForm');
const submissionMessage = document.getElementById('submissionMessage');


hireBtn.addEventListener('click', () => {
  
  const contactSection = document.getElementById('Contact Us');
  contactSection.scrollIntoView({ behavior: 'smooth' });
});


contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const address = document.getElementById('address').value;
  const jobDescription = document.getElementById('jobDescription').value;

  
  submissionMessage.textContent = `Submission entered: Name: ${name}, Phone Number: ${number}, Address: ${address}, Job Description: ${jobDescription}`;

  
  contactForm.reset();
});

const navLinks = document.querySelectorAll('.navbar a');


navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
const projectImages = document.querySelectorAll('.project-image');

projectImages.forEach(image => {
  const previewImg = image.querySelector('.image-preview img');
  const imgSrc = image.querySelector('img').src;
  previewImg.src = imgSrc;

  image.addEventListener('click', () => {
    const preview = image.querySelector('.image-preview');
    preview.style.display = preview.style.display === 'none' ? 'flex' : 'none';
  });
});
const dripCanvas = document.getElementById('drip-canvas');
const dripCtx = dripCanvas.getContext('2d');
const welcomeText = document.getElementById('welcome-text');
const content = document.getElementById('content');

let width, height;
let drops = [];
const characters = ['😀', '😃', '😄', '😁', '😆'];

function init() {
  width = window.innerWidth;
  height = window.innerHeight;
  dripCanvas.width = width;
  dripCanvas.height = height;
  createDrops();
  animateDrops();
  displayWelcomeText();
}

function createDrops() {
  for (let i = 0; i < 100; i++) {
    drops.push({
      x: Math.random() * width,
      y: Math.random() * -height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 5 + 1,
    });
  }
}

function animateDrops() {
  dripCtx.clearRect(0, 0, width, height);
  drops.forEach((drop) => {
    dripCtx.fillStyle = 'rgba(0, 191, 255, 0.5)';
    dripCtx.fillRect(drop.x, drop.y, 2, drop.length);
    drop.y += drop.speed;
    if (drop.y > height) {
      drop.y = -drop.length;
    }
  });
  requestAnimationFrame(animateDrops);
}

function displayWelcomeText() {
  const textContent = 'Welcome';
  const characterSpans = textContent.split('').map((char) => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    return `<span>${randomCharacter}</span>`;
  });
  welcomeText.innerHTML = characterSpans.join('');

  setTimeout(() => {
    content.style.transition = 'opacity 1s ease-in-out';
    content.style.opacity = '1';
    document.getElementById('welcome-screen').style.display = 'none';
  }, 10000);
}

init();
window.addEventListener('resize', init);
const panicProject = document.getElementById('panic-project');
const videoURL = "C:\Users\popparex\Documents\isms-121-CA-2\Ca2\Ticking Away ft. Grabbitz & bbno$ (Official Music Video) __ VALORANT Champions 2023 Anthem.mp4"; 

panicProject.addEventListener('click', () => {
  const videoWindow = window.open('', '_blank');
  videoWindow.document.write(`
    <html>
      <head>
        <title>Video Player</title>
      </head>
      <body style="margin: 0; padding: 0; overflow: hidden;">
        <video src="${videoURL}" autoplay controls style="width: 100vw; height: 100vh;"></video>
      </body>
    </html>
  `);
});

function createPlanes(numPlanes) {
  for (let i = 0; i < numPlanes; i++) {
    const plane = document.createElement('div');
    plane.classList.add('plane');
    plane.style.left = `${Math.random() * 200 - 100}vw`;
    plane.style.top = `${Math.random() * 200 - 100}vh`;
    plane.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.getElementById('scene').appendChild(plane);
  }
}

function createBirds(numBirds) {
  for (let i = 0; i < numBirds; i++) {
    const bird = document.createElement('div');
    bird.classList.add('bird');
    bird.style.left = `${Math.random() * 200 - 100}vw`;
    bird.style.top = `${Math.random() * 200 - 100}vh`;
    bird.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.getElementById('scene').appendChild(bird);
  }
}


createPlanes(20); 
createBirds(12); 
