import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ProjectsForm = ({ data, onChange }) => {
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: '',
      technologies: '',
      description: [],
      liveLink: '',
      githubLink: ''
    };
    onChange([...data, newProject]);
  };

  const removeProject = (id) => {
    onChange(data.filter(project => project.id !== id));
  };

  const updateProject = (id, field, value) => {
    onChange(data.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const updateDescription = (id, value) => {
    const descriptions = value.split('\n').filter(desc => desc.trim());
    updateProject(id, 'description', descriptions);
  };

  return (
    <div className="space-y-6">
      {data.map((project, index) => (
        <div key={project.id} className="border border-gray-200 rounded-lg p-4 relative">
          <button
            onClick={() => removeProject(project.id)}
            className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <h3 className="font-medium text-gray-900 mb-4">Project {index + 1}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="form-label">Project Name *</label>
              <input
                type="text"
                className="form-input"
                value={project.name}
                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                placeholder="My Awesome Project"
              />
            </div>

            <div>
              <label className="form-label">Technologies Used *</label>
              <input
                type="text"
                className="form-input"
                value={project.technologies}
                onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                placeholder="React, Node.js, MongoDB"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Live Link (Optional)</label>
                <input
                  type="url"
                  className="form-input"
                  value={project.liveLink}
                  onChange={(e) => updateProject(project.id, 'liveLink', e.target.value)}
                  placeholder="https://myproject.com"
                />
              </div>

              <div>
                <label className="form-label">GitHub Link (Optional)</label>
                <input
                  type="url"
                  className="form-input"
                  value={project.githubLink}
                  onChange={(e) => updateProject(project.id, 'githubLink', e.target.value)}
                  placeholder="https://github.com/user/repo"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Project Description *</label>
              <textarea
                className="form-textarea"
                value={project.description.join('\n')}
                onChange={(e) => updateDescription(project.id, e.target.value)}
                placeholder="• Built a responsive web application with user authentication
• Implemented RESTful APIs for data management
• Deployed using Docker and AWS EC2"
                rows={4}
              />
              <p className="text-sm text-gray-500 mt-1">
                Each line will become a bullet point. Start lines with • for best formatting.
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        className="btn-secondary flex items-center space-x-2 w-full"
      >
        <Plus className="w-4 h-4" />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default ProjectsForm;