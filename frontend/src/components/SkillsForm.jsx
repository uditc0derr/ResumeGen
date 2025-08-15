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

  return (
    <div className="space-y-6">
      <div>
        <label className="form-label">
          Programming Languages
        </label>
        <input
          type="text"
          className="form-input"
          value={getSkillsString(data.programmingLanguages)}
          onChange={(e) => handleSkillsChange('programmingLanguages', e.target.value)}
          placeholder="JavaScript, Python, Java, C++, etc."
        />
        <p className="text-sm text-gray-500 mt-1">
          Separate skills with commas
        </p>
      </div>

      <div>
        <label className="form-label">
          Frameworks & Libraries
        </label>
        <input
          type="text"
          className="form-input"
          value={getSkillsString(data.frameworks)}
          onChange={(e) => handleSkillsChange('frameworks', e.target.value)}
          placeholder="React, Node.js, Express, Django, Spring Boot, etc."
        />
      </div>

      <div>
        <label className="form-label">
          Tools & Technologies
        </label>
        <input
          type="text"
          className="form-input"
          value={getSkillsString(data.tools)}
          onChange={(e) => handleSkillsChange('tools', e.target.value)}
          placeholder="Git, Docker, AWS, VS Code, Figma, etc."
        />
      </div>

      <div>
        <label className="form-label">
          Databases
        </label>
        <input
          type="text"
          className="form-input"
          value={getSkillsString(data.databases)}
          onChange={(e) => handleSkillsChange('databases', e.target.value)}
          placeholder="MySQL, PostgreSQL, MongoDB, Redis, etc."
        />
      </div>
    </div>
  );
};

export default SkillsForm;