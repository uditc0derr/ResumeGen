import React from 'react';

const SummaryForm = ({ data, onChange }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem'
  };

  const textareaStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    fontSize: '0.875rem',
    transition: 'all 0.2s',
    outline: 'none',
    resize: 'vertical',
    minHeight: '100px'
  };

  const helpTextStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.5rem'
  };

  return (
    <div style={containerStyle}>
      <div>
        <label style={labelStyle}>
          Professional Summary
        </label>
        <textarea
          style={textareaStyle}
          value={data}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write a brief professional summary highlighting your key skills, experience, and career objectives..."
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
          Tip: Keep it concise (2-3 sentences) and focus on your most relevant qualifications.
        </p>
      </div>
    </div>
  );
};

export default SummaryForm;