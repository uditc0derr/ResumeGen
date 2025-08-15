import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ExperienceForm = ({ data, onChange }) => {
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

  return (
    <div className="space-y-6">
      {data.map((experience, index) => (
        <div key={experience.id} className="border border-gray-200 rounded-lg p-4 relative">
          <button
            onClick={() => removeExperience(experience.id)}
            className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <h3 className="font-medium text-gray-900 mb-4">Experience {index + 1}</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Company Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={experience.company}
                  onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                  placeholder="Google, Microsoft, Startup Inc."
                />
              </div>

              <div>
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-input"
                  value={experience.location}
                  onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
                  placeholder="San Francisco, CA"
                />
              </div>

              <div>
                <label className="form-label">Position/Job Title *</label>
                <input
                  type="text"
                  className="form-input"
                  value={experience.position}
                  onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                  placeholder="Software Engineer, Product Manager, etc."
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="form-label">Start Date</label>
                  <input
                    type="text"
                    className="form-input"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                    placeholder="Jan 2023"
                  />
                </div>

                <div>
                  <label className="form-label">End Date</label>
                  <input
                    type="text"
                    className="form-input"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                    placeholder="Present"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="form-label">Job Description & Achievements *</label>
              <textarea
                className="form-textarea"
                value={experience.description.join('\n')}
                onChange={(e) => updateDescription(experience.id, e.target.value)}
                placeholder="• Developed and maintained web applications using React and Node.js
• Led a team of 5 developers to deliver projects on time
• Improved application performance by 40% through code optimization
• Collaborated with cross-functional teams to define product requirements"
                rows={6}
              />
              <p className="text-sm text-gray-500 mt-1">
                Each line will become a bullet point. Start lines with • for best formatting.
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="btn-secondary flex items-center space-x-2 w-full"
      >
        <Plus className="w-4 h-4" />
        <span>Add Work Experience</span>
      </button>
    </div>
  );
};

export default ExperienceForm;