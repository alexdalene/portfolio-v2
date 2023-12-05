export const makeProjects = (projects) => {
  const { image, link } = projects;
  const container = document.querySelector('#container');

  const anchor = document.createElement('a');
  anchor.href = link;
  anchor.target = '_blank';
  anchor.classList.add('overflow-hidden');

  const img = document.createElement('img');
  img.src = image;
  img.alt = 'Image of the project';
  img.classList.add(
    'object-cover',
    'transition-transform',
    'hover:scale-110',
    'duration-300'
  );

  anchor.appendChild(img);
  container.appendChild(anchor);
};
