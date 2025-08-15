import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const EducationForm = ({ data, onChange }) => {
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

  return (
    <div className="space-y-6">
      {data.map((education, index) => (
        <div key={education.id} className="border border-gray-200 rounded-lg p-4 relative">
          <button
            onClick={() => removeEducation(education.id)}
            className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <h3 className="font-medium text-gray-900 mb-4">Education {index + 1}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Institution *</label>
              <input
                type="text"
                className="form-input"
                value={education.institution}
                onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
                placeholder="University Name"
              />
            </div>

            <div>
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-input"
                value={education.location}
                onChange={(e) => updateEducation(education.id, 'location', e.target.value)}
                placeholder="City, State"
              />
            </div>

            <div>
              <label className="form-label">Degree *</label>
              <input
                type="text"
                className="form-input"
                value={education.degree}
                onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                placeholder="Bachelor of Science"
              />
            </div>

            <div>
              <label className="form-label">Field of Study *</label>
              <input
                type="text"
                className="form-input"
                value={education.field}
                onChange={(e) => updateEducation(education.id, 'field', e.target.value)}
                placeholder="Computer Science"
              />
            </div>

            <div>
              <label className="form-label">Start Date</label>
              <input
                type="text"
                className="form-input"
                value={education.startDate}
                onChange={(e) => updateEducation(education.id, 'startDate', e.target.value)}
                placeholder="August 2020"
              />
            </div>

            <div>
              <label className="form-label">End Date</label>
              <input
                type="text"
                className="form-input"
                value={education.endDate}
                onChange={(e) => updateEducation(education.id, 'endDate', e.target.value)}
                placeholder="May 2024"
              />
            </div>

            <div className="md:col-span-2">
              <label className="form-label">GPA (Optional)</label>
              <input
                type="text"
                className="form-input"
                value={education.gpa}
                onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
                placeholder="3.85/4.0"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addEducation}
        className="btn-secondary flex items-center space-x-2 w-full"
      >
        <Plus className="w-4 h-4" />
        <span>Add Education</span>
      </button>
    </div>
  );
};

export default EducationForm;