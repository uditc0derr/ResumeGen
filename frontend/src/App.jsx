import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Download, Save, FileText } from 'lucide-react';

// Import components
import PersonalInfoForm from './components/PersonalInfoForm';
import SummaryForm from './components/SummaryForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';
import ProjectsForm from './components/ProjectsForm';
import AchievementsForm from './components/AchievementsForm';
import ExtracurricularsForm from './components/ExtracurricularsForm';
import ResumePreview from './components/ResumePreview';

// Initial state structure
const initialState = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    website: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: {
    programmingLanguages: [],
    frameworks: [],
    tools: [],
    databases: []
  },
  projects: [],
  achievements: [],
  extracurriculars: []
};

function App() {
  const [resumeData, setResumeData] = useState(initialState);
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [isSaved, setIsSaved] = useState(true);
  const resumeRef = useRef();

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever resumeData changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    setIsSaved(false);
    
    // Auto-save after 1 second of no changes
    const timer = setTimeout(() => {
      setIsSaved(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [resumeData]);

  const handleDataChange = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${resumeData.personalInfo.fullName || 'Resume'}.pdf`,
    pageStyle: '@page { margin: 0.5in; }'
  });

  const sections = [
    { id: 'personalInfo', label: 'Personal Info', component: PersonalInfoForm },
    { id: 'summary', label: 'Summary', component: SummaryForm },
    { id: 'experience', label: 'Experience', component: ExperienceForm },
    { id: 'education', label: 'Education', component: EducationForm },
    { id: 'skills', label: 'Skills', component: SkillsForm },
    { id: 'projects', label: 'Projects', component: ProjectsForm },
    { id: 'achievements', label: 'Achievements', component: AchievementsForm },
    { id: 'extracurriculars', label: 'Extracurriculars', component: ExtracurricularsForm }
  ];

  const renderActiveForm = () => {
    const section = sections.find(s => s.id === activeSection);
    if (!section) return null;

    const Component = section.component;
    return (
      <Component
        data={resumeData[activeSection]}
        onChange={(data) => handleDataChange(activeSection, data)}
      />
    );
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      setResumeData(initialState);
      localStorage.removeItem('resumeData');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Resume Generator</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Save className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">
                  {isSaved ? 'Saved' : 'Saving...'}
                </span>
              </div>
              <button
                onClick={handlePrint}
                className="btn-primary flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </button>
              <button
                onClick={clearAllData}
                className="btn-secondary"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="lg:w-1/2">
            {/* Section Navigation */}
            <div className="section-card mb-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Form */}
            <div className="section-card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {sections.find(s => s.id === activeSection)?.label}
              </h2>
              {renderActiveForm()}
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Live Preview</h2>
                <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                  <ResumePreview ref={resumeRef} data={resumeData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;