import React from 'react';

const PersonalInfoForm = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="form-label">
          Full Name *
        </label>
        <input
          type="text"
          className="form-input"
          value={data.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="Enter your full name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">
            Email *
          </label>
          <input
            type="email"
            className="form-input"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="form-label">
            Phone Number *
          </label>
          <input
            type="tel"
            className="form-input"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className="form-label">
          LinkedIn Profile
        </label>
        <input
          type="url"
          className="form-input"
          value={data.linkedin}
          onChange={(e) => handleChange('linkedin', e.target.value)}
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>

      <div>
        <label className="form-label">
          GitHub Profile
        </label>
        <input
          type="url"
          className="form-input"
          value={data.github}
          onChange={(e) => handleChange('github', e.target.value)}
          placeholder="https://github.com/yourusername"
        />
      </div>

      <div>
        <label className="form-label">
          Personal Website
        </label>
        <input
          type="url"
          className="form-input"
          value={data.website}
          onChange={(e) => handleChange('website', e.target.value)}
          placeholder="https://yourwebsite.com"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;