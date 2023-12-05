// Helper function to create internal link elements
export const createLink = (href, text) => {
  const link = document.createElement('a');
  link.href = href;
  link.classList.add(
    'underline',
    'underline-offset-4',
    'flex',
    'gap-0.5',
    'hover:-translate-x-1',
    'transition-transform'
  );
  link.textContent = text;
  return link;
};
