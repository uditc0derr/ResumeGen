import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const AchievementsForm = ({ data, onChange }) => {
  const addAchievement = () => {
    const newAchievement = {
      id: Date.now(),
      title: '',
      description: '',
      date: ''
    };
    onChange([...data, newAchievement]);
  };

  const removeAchievement = (id) => {
    onChange(data.filter(achievement => achievement.id !== id));
  };

  const updateAchievement = (id, field, value) => {
    onChange(data.map(achievement => 
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    ));
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const achievementCardStyle = {
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
    minHeight: '75px'
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
      {data.map((achievement, index) => (
        <div key={achievement.id} style={achievementCardStyle}>
          <button
            onClick={() => removeAchievement(achievement.id)}
            style={deleteButtonStyle}
            onMouseEnter={(e) => e.target.style.color = '#dc2626'}
            onMouseLeave={(e) => e.target.style.color = '#ef4444'}
          >
            <Trash2 style={{ width: '1rem', height: '1rem' }} />
          </button>

          <h3 style={titleStyle}>Achievement {index + 1}</h3>
          
          <div style={formGroupStyle}>
            <div>
              <label style={labelStyle}>Achievement Title *</label>
              <input
                type="text"
                style={inputStyle}
                value={achievement.title}
                onChange={(e) => updateAchievement(achievement.id, 'title', e.target.value)}
                placeholder="Dean's List, Scholarship Recipient, Competition Winner, etc."
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
              <label style={labelStyle}>Date</label>
              <input
                type="text"
                style={inputStyle}
                value={achievement.date}
                onChange={(e) => updateAchievement(achievement.id, 'date', e.target.value)}
                placeholder="Fall 2023"
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
              <label style={labelStyle}>Description</label>
              <textarea
                style={textareaStyle}
                value={achievement.description}
                onChange={(e) => updateAchievement(achievement.id, 'description', e.target.value)}
                placeholder="Provide additional details about this achievement..."
                rows={3}
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
        onClick={addAchievement}
        style={addButtonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f4f6'}
      >
        <Plus style={{ width: '1rem', height: '1rem' }} />
        <span>Add Achievement</span>
      </button>
    </div>
  );
};

export default AchievementsForm;