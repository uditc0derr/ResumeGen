import React from 'react';
import { Type, Bold, Italic, Underline } from 'lucide-react';

const FontCustomizer = ({ fontSettings, onChange }) => {
  const fontFamilies = [
    { value: 'cormorant', label: 'Cormorant Garamond (Classic)', family: "'Cormorant Garamond', 'Georgia', serif" },
    { value: 'arial', label: 'Arial (Modern)', family: "'Arial', sans-serif" },
    { value: 'times', label: 'Times New Roman (Traditional)', family: "'Times New Roman', serif" },
    { value: 'helvetica', label: 'Helvetica (Clean)', family: "'Helvetica', 'Arial', sans-serif" },
    { value: 'georgia', label: 'Georgia (Elegant)', family: "'Georgia', serif" },
    { value: 'calibri', label: 'Calibri (Professional)', family: "'Calibri', sans-serif" }
  ];

  const fontSizes = [
    { value: '10pt', label: '10pt (Small)' },
    { value: '11pt', label: '11pt (Standard)' },
    { value: '12pt', label: '12pt (Large)' },
    { value: '13pt', label: '13pt (Extra Large)' }
  ];

  const handleChange = (field, value) => {
    onChange({
      ...fontSettings,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Type className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Font Customization</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Font Family</label>
          <select
            className="form-input"
            value={fontSettings.fontFamily}
            onChange={(e) => handleChange('fontFamily', e.target.value)}
          >
            {fontFamilies.map(font => (
              <option key={font.value} value={font.value}>
                {font.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Font Size</label>
          <select
            className="form-input"
            value={fontSettings.fontSize}
            onChange={(e) => handleChange('fontSize', e.target.value)}
          >
            {fontSizes.map(size => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="form-label">Text Styling</label>
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={fontSettings.boldHeadings}
              onChange={(e) => handleChange('boldHeadings', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <Bold className="w-4 h-4" />
            <span className="text-sm">Bold Headings</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={fontSettings.italicSubtitles}
              onChange={(e) => handleChange('italicSubtitles', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <Italic className="w-4 h-4" />
            <span className="text-sm">Italic Subtitles</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={fontSettings.underlineLinks}
              onChange={(e) => handleChange('underlineLinks', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <Underline className="w-4 h-4" />
            <span className="text-sm">Underline Links</span>
          </label>
        </div>
      </div>

      <div>
        <label className="form-label">Line Height</label>
        <input
          type="range"
          min="1.2"
          max="2.0"
          step="0.1"
          value={fontSettings.lineHeight}
          onChange={(e) => handleChange('lineHeight', parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Tight (1.2)</span>
          <span>Current: {fontSettings.lineHeight}</span>
          <span>Loose (2.0)</span>
        </div>
      </div>
    </div>
  );
};

export default FontCustomizer;