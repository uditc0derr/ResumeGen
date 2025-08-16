import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ExperienceForm = ({ data, onChange }) => {
  const isMobile = window.innerWidth < 768;

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: []
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (id) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  const updateExperience = (id, field, value) => {
    onChange(data.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const updateDescription = (id, value) => {
    const descriptions = value.split('\n').filter(desc => desc.trim());
    updateExperience(id, 'description', descriptions);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const experienceCardStyle = {
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

  const dateGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.5rem'
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
      {data.map((experience, index) => (
        <div key={experience.id} style={experienceCardStyle}>
          <button
            onClick={() => removeExperience(experience.id)}
            style={deleteButtonStyle}
            onMouseEnter={(e) => e.target.style.color = '#dc2626'}
            onMouseLeave={(e) => e.target.style.color = '#ef4444'}
          >
            <Trash2 style={{ width: '1rem', height: '1rem' }} />
          </button>

          <h3 style={titleStyle}>Experience {index + 1}</h3>
          
          <div style={formGroupStyle}>
            <div style={gridStyle}>
              <div>
                <label style={labelStyle}>Company Name *</label>
                <input
                  type="text"
                  style={inputStyle}
                  value={experience.company}
                  onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                  placeholder="Google, Microsoft, Startup Inc."
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
                <label style={labelStyle}>Location</label>
                <input
                  type="text"
                  style={inputStyle}
                  value={experience.location}
                  onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
                  placeholder="San Francisco, CA"
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
                <label style={labelStyle}>Position/Job Title *</label>
                <input
                  type="text"
                  style={inputStyle}
                  value={experience.position}
                  onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                  placeholder="Software Engineer, Product Manager, etc."
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

              <div style={dateGridStyle}>
                <div>
                  <label style={labelStyle}>Start Date</label>
                  <input
                    type="text"
                    style={inputStyle}
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                    placeholder="Jan 2023"
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
                  <label style={labelStyle}>End Date</label>
                  <input
                    type="text"
                    style={inputStyle}
                    value={experience.endDate}
                    onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                    placeholder="Present"
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
            </div>

            <div>
              <label style={labelStyle}>Job Description & Achievements *</label>
              <textarea
                style={textareaStyle}
                value={experience.description.join('\n')}
                onChange={(e) => updateDescription(experience.id, e.target.value)}
                placeholder="• Developed and maintained web applications using React and Node.js
• Led a team of 5 developers to deliver projects on time
• Improved application performance by 40% through code optimization
• Collaborated with cross-functional teams to define product requirements"
                rows={6}
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
        onClick={addExperience}
        style={addButtonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f4f6'}
      >
        <Plus style={{ width: '1rem', height: '1rem' }} />
        <span>Add Work Experience</span>
      </button>
    </div>
  );
};

export default ExperienceForm;