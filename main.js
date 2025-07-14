const element = document.getElementById('animated-title');
const texts = ['Luis Maria Laudadio', 'Frontend Developer'];
let index = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentText = texts[index];
  const delay = deleting ? 60 : 100;

  if (deleting) {
    element.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      index = (index + 1) % texts.length;
    }
  } else {
    element.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  }
  setTimeout(typeEffect, delay);
}

typeEffect();