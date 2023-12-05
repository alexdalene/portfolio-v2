import { createLink } from './menu-internal.mjs';

// Helper function to create external link elements
export const createExternalLink = (href, text) => {
  const link = createLink(href, text);
  const img = document.createElement('img');
  img.src = '/src/images/svg/link.svg';
  img.alt = '';
  link.insertBefore(img, link.firstChild);
  return link;
};
