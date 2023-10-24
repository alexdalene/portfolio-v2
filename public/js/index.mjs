// Setup
import Navbar from './components/navbar.mjs';

Navbar();

// For opening/closing menu

const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const container = document.querySelector('#menu-container');

openBtn.addEventListener('click', () => {
  container.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  container.classList.add('hidden');
});
