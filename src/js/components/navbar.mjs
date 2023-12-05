import { menu } from './menu/menu.mjs';

export const navbar = () => {
  const body = document.querySelector('body');

  const nav = document.createElement('nav');
  nav.classList.add(
    'px-4',
    'sm:px-6',
    'flex',
    'justify-between',
    'fixed',
    'top-0',
    'py-4',
    'sm:py-4',
    'z-10',
    'w-full'
  );

  // Create logo
  const logo = document.createElement('a');
  logo.href = '/';
  logo.classList.add('font-garamond', 'font-bold', 'text-5xl');
  logo.textContent = 'AD';

  // Create open button
  const openButton = document.createElement('button');
  openButton.classList.add('font-medium');
  openButton.id = 'open';
  openButton.textContent = 'MENU';

  openButton.addEventListener('click', () => {
    menu();
  });

  nav.append(logo, openButton);
  body.prepend(nav);
};
