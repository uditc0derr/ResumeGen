import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const EducationForm = ({ data, onChange }) => {
  const isMobile = window.innerWidth < 768;

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      location: ''
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (id) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  const updateEducation = (id, field, value) => {
    onChange(data.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const educationCardStyle = {
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

  const fullWidthStyle = {
    gridColumn: isMobile ? '1' : '1 / -1'
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
      {data.map((education, index) => (
        <div key={education.id} style={educationCardStyle}>
          <button
            onClick={() => removeEducation(education.id)}
            style={deleteButtonStyle}
            onMouseEnter={(e) => e.target.style.color = '#dc2626'}
            onMouseLeave={(e) => e.target.style.color = '#ef4444'}
          >
            <Trash2 style={{ width: '1rem', height: '1rem' }} />
          </button>

          <h3 style={titleStyle}>Education {index + 1}</h3>
          
          <div style={gridStyle}>
            <div>
              <label style={labelStyle}>Institution *</label>
              <input
                type="text"
                style={inputStyle}
                value={education.institution}
                onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
                placeholder="University Name"
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
                value={education.location}
                onChange={(e) => updateEducation(education.id, 'location', e.target.value)}
                placeholder="City, State"
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
              <label style={labelStyle}>Degree *</label>
              <input
                type="text"
                style={inputStyle}
                value={education.degree}
                onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                placeholder="Bachelor of Science"
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
              <label style={labelStyle}>Field of Study *</label>
              <input
                type="text"
                style={inputStyle}
                value={education.field}
                onChange={(e) => updateEducation(education.id, 'field', e.target.value)}
                placeholder="Computer Science"
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
                  value={education.startDate}
                  onChange={(e) => updateEducation(education.id, 'startDate', e.target.value)}
                  placeholder="August 2020"
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
                  value={education.endDate}
                  onChange={(e) => updateEducation(education.id, 'endDate', e.target.value)}
                  placeholder="May 2024"
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

            <div style={fullWidthStyle}>
              <label style={labelStyle}>CGPA (Optional)</label>
              <input
                type="text"
                style={inputStyle}
                value={education.gpa}
                onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
                placeholder="7.5/10"
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
      ))}

      <button
        onClick={addEducation}
        style={addButtonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f4f6'}
      >
        <Plus style={{ width: '1rem', height: '1rem' }} />
        <span>Add Education</span>
      </button>
    </div>
  );
};

export default EducationForm;