import React from 'react';

const SummaryForm = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="form-label">
          Professional Summary
        </label>
        <textarea
          className="form-textarea"
          value={data}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write a brief professional summary highlighting your key skills, experience, and career objectives..."
          rows={6}
        />
        <p className="text-sm text-gray-500 mt-2">
          Tip: Keep it concise (2-3 sentences) and focus on your most relevant qualifications.
        </p>
      </div>
    </div>
  );
};

export default SummaryForm;