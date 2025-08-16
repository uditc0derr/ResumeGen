import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ProjectsForm = ({ data, onChange }) => {
  const isMobile = window.innerWidth < 768;

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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const projectCardStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1rem',
    position: 'relative'
  };

  const deleteButtonStyle = {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    padding: '0.25rem',
    color: '#ef4444',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: '0.25rem',
    transition: 'color 0.2s'
  };

  const titleStyle = {
    fontWeight: '500',
    color: '#111827',
    marginBottom: '1rem'
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: '1rem'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    fontSize: '0.875rem',
    transition: 'all 0.2s',
    outline: 'none'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '100px'
  };

  const helpTextStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.25rem'
  };

  const addButtonStyle = {
    backgroundColor: '#f3f4f6',
    color: '#374151',
    fontWeight: '500',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: '100%',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={containerStyle}>
      {data.map((project, index) => (
        <div key={project.id} style={projectCardStyle}>
          <button
            onClick={() => removeProject(project.id)}
            style={deleteButtonStyle}
            onMouseEnter={(e) => e.target.style.color = '#dc2626'}
            onMouseLeave={(e) => e.target.style.color = '#ef4444'}
          >
            <Trash2 style={{ width: '1rem', height: '1rem' }} />
          </button>

          <h3 style={titleStyle}>Project {index + 1}</h3>
          
          <div style={formGroupStyle}>
            <div>
              <label style={labelStyle}>Project Name *</label>
              <input
                type="text"
                style={inputStyle}
                value={project.name}
                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                placeholder="My Awesome Project"
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Technologies Used *</label>
              <input
                type="text"
                style={inputStyle}
                value={project.technologies}
                onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                placeholder="React, Node.js, MongoDB"
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                }}
              />
            </div>

            <div style={gridStyle}>
              <div>
                <label style={labelStyle}>Live Link (Optional)</label>
                <input
                  type="url"
                  style={inputStyle}
                  value={project.liveLink}
                  onChange={(e) => updateProject(project.id, 'liveLink', e.target.value)}
                  placeholder="https://myproject.com"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                  }}
                />
              </div>

              <div>
                <label style={labelStyle}>GitHub Link (Optional)</label>
                <input
                  type="url"
                  style={inputStyle}
                  value={project.githubLink}
                  onChange={(e) => updateProject(project.id, 'githubLink', e.target.value)}
                  placeholder="https://github.com/user/repo"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                  }}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Project Description *</label>
              <textarea
                style={textareaStyle}
                value={project.description.join('\n')}
                onChange={(e) => updateDescription(project.id, e.target.value)}
                placeholder="• Built a responsive web application with user authentication
• Implemented RESTful APIs for data management
• Deployed using Docker and AWS EC2"
                rows={4}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                }}
              />
              <p style={helpTextStyle}>
                Each line will become a bullet point. Start lines with • for best formatting.
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        style={addButtonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f4f6'}
      >
        <Plus style={{ width: '1rem', height: '1rem' }} />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default ProjectsForm;