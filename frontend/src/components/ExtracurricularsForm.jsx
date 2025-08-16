import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ExtracurricularsForm = ({ data, onChange }) => {
  const isMobile = window.innerWidth < 768;

  const addExtracurricular = () => {
    const newExtracurricular = {
      id: Date.now(),
      organization: '',
      position: '',
      startDate: '',
      endDate: '',
      description: []
    };
    onChange([...data, newExtracurricular]);
  };

  const removeExtracurricular = (id) => {
    onChange(data.filter(extra => extra.id !== id));
  };

  const updateExtracurricular = (id, field, value) => {
    onChange(data.map(extra => 
      extra.id === id ? { ...extra, [field]: value } : extra
    ));
  };

  const updateDescription = (id, value) => {
    const descriptions = value.split('\n').filter(desc => desc.trim());
    updateExtracurricular(id, 'description', descriptions);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const extraCardStyle = {
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
      {data.map((extracurricular, index) => (
        <div key={extracurricular.id} style={extraCardStyle}>
          <button
            onClick={() => removeExtracurricular(extracurricular.id)}
            style={deleteButtonStyle}
            onMouseEnter={(e) => e.target.style.color = '#dc2626'}
            onMouseLeave={(e) => e.target.style.color = '#ef4444'}
          >
            <Trash2 style={{ width: '1rem', height: '1rem' }} />
          </button>

          <h3 style={titleStyle}>Extracurricular {index + 1}</h3>
          
          <div style={formGroupStyle}>
            <div style={gridStyle}>
              <div>
                <label style={labelStyle}>Organization/Club *</label>
                <input
                  type="text"
                  style={inputStyle}
                  value={extracurricular.organization}
                  onChange={(e) => updateExtracurricular(extracurricular.id, 'organization', e.target.value)}
                  placeholder="Computer Science Club, Volunteer Organization, etc."
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
                <label style={labelStyle}>Position/Role</label>
                <input
                  type="text"
                  style={inputStyle}
                  value={extracurricular.position}
                  onChange={(e) => updateExtracurricular(extracurricular.id, 'position', e.target.value)}
                  placeholder="President, Member, Volunteer, etc."
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
                <label style={labelStyle}>Start Date</label>
                <input
                  type="text"
                  style={inputStyle}
                  value={extracurricular.startDate}
                  onChange={(e) => updateExtracurricular(extracurricular.id, 'startDate', e.target.value)}
                  placeholder="September 2022"
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
                  value={extracurricular.endDate}
                  onChange={(e) => updateExtracurricular(extracurricular.id, 'endDate', e.target.value)}
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

            <div>
              <label style={labelStyle}>Description</label>
              <textarea
                style={textareaStyle}
                value={extracurricular.description.join('\n')}
                onChange={(e) => updateDescription(extracurricular.id, e.target.value)}
                placeholder="• Organized weekly coding workshops for 50+ students
• Led team of 10 volunteers in community outreach programs
• Coordinated fundraising events raising $5,000+ for local charities"
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
        onClick={addExtracurricular}
        style={addButtonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f4f6'}
      >
        <Plus style={{ width: '1rem', height: '1rem' }} />
        <span>Add Extracurricular Activity</span>
      </button>
    </div>
  );
};

export default ExtracurricularsForm;