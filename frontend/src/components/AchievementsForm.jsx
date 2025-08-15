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

  return (
    <div className="space-y-6">
      {data.map((achievement, index) => (
        <div key={achievement.id} className="border border-gray-200 rounded-lg p-4 relative">
          <button
            onClick={() => removeAchievement(achievement.id)}
            className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <h3 className="font-medium text-gray-900 mb-4">Achievement {index + 1}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="form-label">Achievement Title *</label>
              <input
                type="text"
                className="form-input"
                value={achievement.title}
                onChange={(e) => updateAchievement(achievement.id, 'title', e.target.value)}
                placeholder="Dean's List, Scholarship Recipient, Competition Winner, etc."
              />
            </div>

            <div>
              <label className="form-label">Date</label>
              <input
                type="text"
                className="form-input"
                value={achievement.date}
                onChange={(e) => updateAchievement(achievement.id, 'date', e.target.value)}
                placeholder="Fall 2023"
              />
            </div>

            <div>
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                value={achievement.description}
                onChange={(e) => updateAchievement(achievement.id, 'description', e.target.value)}
                placeholder="Provide additional details about this achievement..."
                rows={3}
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addAchievement}
        className="btn-secondary flex items-center space-x-2 w-full"
      >
        <Plus className="w-4 h-4" />
        <span>Add Achievement</span>
      </button>
    </div>
  );
};

export default AchievementsForm;