/**
 * Creates a dynamic navbar
 * @function
 */
const Navbar = () => {
  const nav = document.createElement('nav');
  const main = document.querySelector('#main');

  nav.classList.add(
    'px-4',
    'sm:px-6',
    'flex',
    'justify-between',
    'sticky',
    'top-0',
    'py-4',
    'sm:py-4',
    'z-10'
  );

  nav.innerHTML += `
    <span class="font-garamond font-bold text-5xl">AD</span>
    <span class="cursor-pointer font-medium" id="open">MENY</span>
    `;

  main.prepend(nav);
};

export default Navbar;
