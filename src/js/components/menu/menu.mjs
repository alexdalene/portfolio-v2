import { createLink } from './menu-internal.mjs';
import { createExternalLink } from './menu-external.mjs';
import { createList } from './menu.list.mjs';

export const menu = () => {
  const body = document.querySelector('body');

  // Create menu container element
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-container';
  menuContainer.classList.add(
    'inset-0',
    'fixed',
    'bg-black',
    'w-full',
    'text-white',
    'flex',
    'flex-col',
    'gap-32',
    'py-4',
    'z-50'
  );

  // Create navigation element
  const nav = document.createElement('nav');
  nav.classList.add('px-4', 'sm:px-6', 'flex', 'justify-between');

  // Create logo
  const logo = document.createElement('a');
  logo.href = '/';
  logo.classList.add('font-garamond', 'font-bold', 'text-5xl');
  logo.textContent = 'AD';

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.classList.add('font-medium');
  closeButton.id = 'close';
  closeButton.textContent = 'CLOSE';

  closeButton.addEventListener('click', () => {
    body.removeChild(menuContainer);
  });

  // Append elements to the navigation
  nav.appendChild(logo);
  nav.appendChild(closeButton);

  // Create links for the first unordered list
  const homeLink = createLink('/', 'HJEM');
  const projectsLink = createLink('/projects/', 'PROSJEKTER');
  const contactLink = createLink('/contact/', 'KONTAKT');

  // Create the first unordered list
  const list1 = createList([homeLink, projectsLink, contactLink]);

  // Create links for the second unordered list
  const githubLink = createExternalLink(
    'https://github.com/alexdalene',
    'GITHUB'
  );
  const linkedinLink = createExternalLink(
    'https://www.linkedin.com/in/alex-dalene/',
    'LINKEDIN'
  );

  // Create the second unordered list
  const list2 = createList([githubLink, linkedinLink]);

  // Append elements to the menu container
  menuContainer.appendChild(nav);
  menuContainer.appendChild(list1);
  menuContainer.appendChild(list2);

  body.append(menuContainer);
};
