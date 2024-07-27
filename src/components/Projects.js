import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="my-16">
      <h2 className="text-4xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Project 1</h3>
          <p>Description of your first project.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Project 2</h3>
          <p>Description of your second project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
