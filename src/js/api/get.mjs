export const getProjects = async () => {
  const response = await fetch('/src/db/projects.json');

  const data = await response.json();

  return data;
};
