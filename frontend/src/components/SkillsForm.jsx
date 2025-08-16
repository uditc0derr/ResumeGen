import React from 'react';

const SkillsForm = ({ data, onChange }) => {
  const handleSkillsChange = (category, value) => {
    const skills = value.split(',').map(skill => skill.trim()).filter(skill => skill);
    onChange({
      ...data,
      [category]: skills
    });
  };

  const getSkillsString = (skillsArray) => {
    return skillsArray.join(', ');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
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

  const helpTextStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.25rem'
  };

  return (
    <div style={containerStyle}>
      <div>
        <label style={labelStyle}>
          Programming Languages & Database
        </label>
        <input
          type="text"
          style={inputStyle}
          value={getSkillsString(data.programmingLanguages)}
          onChange={(e) => handleSkillsChange('programmingLanguages', e.target.value)}
          placeholder="JavaScript, Python, MongoDB, MySQL etc."
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
          Separate skills with commas
        </p>
      </div>

      <div>
        <label style={labelStyle}>
          Frameworks & Libraries
        </label>
        <input
          type="text"
          style={inputStyle}
          value={getSkillsString(data.frameworks)}
          onChange={(e) => handleSkillsChange('frameworks', e.target.value)}
          placeholder="React, Node.js, Express, Django, Spring Boot, etc."
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
        <label style={labelStyle}>
          Tools & Technologies
        </label>
        <input
          type="text"
          style={inputStyle}
          value={getSkillsString(data.tools)}
          onChange={(e) => handleSkillsChange('tools', e.target.value)}
          placeholder="Git, Docker, AWS, VS Code, Figma, etc."
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
        <label style={labelStyle}>
         Soft Skills
        </label>
        <input
          type="text"
          style={inputStyle}
          value={getSkillsString(data.databases)}
          onChange={(e) => handleSkillsChange('databases', e.target.value)}
          placeholder="Communication, Teamwork, Problem-Solving, Leadership, etc."
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
  );
};

export default SkillsForm;