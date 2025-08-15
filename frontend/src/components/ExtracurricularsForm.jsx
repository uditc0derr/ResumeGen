import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ExtracurricularsForm = ({ data, onChange }) => {
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

  return (
    <div className="space-y-6">
      {data.map((extracurricular, index) => (
        <div key={extracurricular.id} className="border border-gray-200 rounded-lg p-4 relative">
          <button
            onClick={() => removeExtracurricular(extracurricular.id)}
            className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <h3 className="font-medium text-gray-900 mb-4">Extracurricular {index + 1}</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Organization/Club *</label>
                <input
                  type="text"
                  className="form-input"
                  value={extracurricular.organization}
                  onChange={(e) => updateExtracurricular(extracurricular.id, 'organization', e.target.value)}
                  placeholder="Computer Science Club, Volunteer Organization, etc."
                />
              </div>

              <div>
                <label className="form-label">Position/Role</label>
                <input
                  type="text"
                  className="form-input"
                  value={extracurricular.position}
                  onChange={(e) => updateExtracurricular(extracurricular.id, 'position', e.target.value)}
                  placeholder="President, Member, Volunteer, etc."
                />
              </div>

              <div>
                <label className="form-label">Start Date</label>
                <input
                  type="text"
                  className="form-input"
                  value={extracurricular.startDate}
                  onChange={(e) => updateExtracurricular(extracurricular.id, 'startDate', e.target.value)}
                  placeholder="September 2022"
                />
              </div>

              <div>
                <label className="form-label">End Date</label>
                <input
                  type="text"
                  className="form-input"
                  value={extracurricular.endDate}
                  onChange={(e) => updateExtracurricular(extracurricular.id, 'endDate', e.target.value)}
                  placeholder="Present"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                value={extracurricular.description.join('\n')}
                onChange={(e) => updateDescription(extracurricular.id, e.target.value)}
                placeholder="• Organized weekly coding workshops for 50+ students
• Led team of 10 volunteers in community outreach programs
• Coordinated fundraising events raising $5,000+ for local charities"
                rows={4}
              />
              <p className="text-sm text-gray-500 mt-1">
                Each line will become a bullet point. Start lines with • for best formatting.
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addExtracurricular}
        className="btn-secondary flex items-center space-x-2 w-full"
      >
        <Plus className="w-4 h-4" />
        <span>Add Extracurricular Activity</span>
      </button>
    </div>
  );
};

export default ExtracurricularsForm;