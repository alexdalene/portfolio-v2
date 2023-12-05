// Create unordered lists
export const createList = (items) => {
  const list = document.createElement('ul');
  list.classList.add(
    'flex',
    'flex-col',
    'gap-4',
    'px-4',
    'sm:px-6',
    'items-end'
  );

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.appendChild(item);
    list.appendChild(listItem);
  });

  return list;
};
