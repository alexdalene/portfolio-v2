// Setup
import { navbar } from './components/Navbar.mjs';
import { getProjects } from './api/get.mjs';
import { makeProjects } from './components/projects/projects.mjs';

const render = async () => {
  const url = new URL(location.href).toString();

  if (url.includes('projects')) {
    const projects = await getProjects();
    projects.forEach((project) => {
      makeProjects(project);
    });
  }
  navbar();
};

render();
