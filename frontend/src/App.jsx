import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Download, Save, FileText } from "lucide-react";

// Import components
import PersonalInfoForm from "./components/PersonalInfoForm";
import SummaryForm from "./components/SummaryForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";
import ProjectsForm from "./components/ProjectsForm";
import AchievementsForm from "./components/AchievementsForm";
import ExtracurricularsForm from "./components/ExtracurricularsForm";
import ResumePreview from "./components/ResumePreview";

// Initial state structure
const initialState = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    website: "",
  },
  summary: "",
  experience: [],
  education: [],
  skills: {
    programmingLanguages: [],
    frameworks: [],
    tools: [],
    databases: [],
  },
  projects: [],
  achievements: [],
  extracurriculars: [],
};

function App() {
  const [resumeData, setResumeData] = useState(initialState);
  const [activeSection, setActiveSection] = useState("personalInfo");
  const [isSaved, setIsSaved] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const resumeRef = useRef();

  // Responsive
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (err) {
        console.error("Error loading saved data:", err);
      }
    }
  }, []);

  // Debounced save
  useEffect(() => {
    setIsSaved(false);
    const timer = setTimeout(() => {
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
      setIsSaved(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resumeData]);

  const handleDataChange = (section, data) => {
    setResumeData((prev) => ({ ...prev, [section]: data }));
  };
// const resumeRef = useRef();

const handlePrint = useReactToPrint({
  contentRef: resumeRef,
  documentTitle: `${resumeData.personalInfo.fullName || 'Resume'}.pdf`,
  pageStyle: `
    @page {
      margin: 0;
      size: 8.5in 11in; /* Standard US Letter size */
    }
    @media print {
      html, body {
        margin: 0;
        padding: 0;
        width: 8.5in;
        height: 11in;
        overflow: hidden;
        -webkit-print-color-adjust: exact;
      }
      .resume-container {
        display: block !important;
        visibility: visible !important;
        margin: 0;
        padding: 0.5in;
        width: 8.5in;
        min-height: 11in;
        box-shadow: none;
        border: none;
        background-color: #fff;
      }
      /* Hide everything except the resume content */
      body * {
        visibility: hidden;
      }
      .resume-container, .resume-container * {
        visibility: visible !important;
      }
    }
  `,
  onBeforeGetContent: () => {
    return new Promise((resolve, reject) => {
      if (!resumeRef.current) {
        console.error("ResumePreview ref is not available");
        reject(new Error("Resume preview is not available"));
        return;
      }
      setTimeout(() => {
        console.log("resumeRef.current:", resumeRef.current);
        console.log("resumeRef content:", resumeRef.current.innerHTML);
        resolve();
      }, 100);
    });
  },
  onPrintError: (errorLocation, error) => {
    console.error("Print error:", errorLocation, error);
    alert("Failed to generate PDF. Please ensure the resume has content and try again.");
  }
});



  const clearAllData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all data? This action cannot be undone."
      )
    ) {
      setResumeData(initialState);
      localStorage.removeItem("resumeData");
    }
  };

  const sections = [
    { id: "personalInfo", label: "Personal Info", component: PersonalInfoForm },
    { id: "summary", label: "Summary", component: SummaryForm },
    { id: "experience", label: "Experience", component: ExperienceForm },
    { id: "education", label: "Education", component: EducationForm },
    { id: "skills", label: "Skills", component: SkillsForm },
    { id: "projects", label: "Projects", component: ProjectsForm },
    { id: "achievements", label: "Achievements", component: AchievementsForm },
    {
      id: "extracurriculars",
      label: "Extracurriculars",
      component: ExtracurricularsForm,
    },
  ];

  const renderActiveForm = () => {
    const section = sections.find((s) => s.id === activeSection);
    if (!section) return null;
    const Component = section.component;
    return (
      <Component
        data={resumeData[activeSection]}
        onChange={(data) => handleDataChange(activeSection, data)}
      />
    );
  };

  // --- Styles ---
  const mainContainerStyle = { minHeight: "100vh", backgroundColor: "#f9fafb" };
  const headerStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    borderBottom: "1px solid #e5e7eb",
  };
  const headerContainerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: isMobile ? "0 1rem" : "0 1.5rem",
  };
  const headerContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "1rem" : "0",
  };
  const logoStyle = { display: "flex", alignItems: "center", gap: "0.75rem" };
  const titleStyle = {
    fontSize: isMobile ? "1.5rem" : "1.875rem",
    fontWeight: "bold",
    color: "#111827",
  };
  const headerActionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flexDirection: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "auto",
  };
  const saveStatusStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    color: "#6b7280",
  };
  const btnPrimaryStyle = {
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "background-color 0.2s",
    width: isMobile ? "100%" : "auto",
    justifyContent: "center",
  };
  const btnSecondaryStyle = {
    backgroundColor: "#f3f4f6",
    color: "#374151",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
    width: isMobile ? "100%" : "auto",
    justifyContent: "center",
  };
  const contentStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: isMobile ? "1rem" : "2rem 1.5rem",
  };
  const layoutStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "2rem",
  };
  const formSectionStyle = { width: isMobile ? "100%" : "50%" };
  const previewSectionStyle = { width: isMobile ? "100%" : "50%" };
  const sectionCardStyle = {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
    padding: "1.5rem",
    marginBottom: "1.5rem",
  };
  const navigationGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
    gap: "0.5rem",
  };
  const navButtonStyle = (isActive) => ({
    padding: "0.75rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s",
    border: "1px solid",
    cursor: "pointer",
    textAlign: "center",
    backgroundColor: isActive ? "#dbeafe" : "#f9fafb",
    color: isActive ? "#1d4ed8" : "#374151",
    borderColor: isActive ? "#93c5fd" : "#e5e7eb",
  });
  const sectionTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "1.5rem",
  };
  const previewContainerStyle = {
    position: isMobile ? "static" : "sticky",
    top: isMobile ? "auto" : "2rem",
  };
  const previewCardStyle = {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
    padding: "1.5rem",
  };
  const previewTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "1.5rem",
  };
  const resumeContainerStyle = {
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    overflow: "hidden",
    backgroundColor: "white",
  };

  return (
    <div style={mainContainerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={headerContainerStyle}>
          <div style={headerContentStyle}>
            <div style={logoStyle}>
              <FileText
                style={{ width: "2rem", height: "2rem", color: "#2563eb" }}
              />
              <h1 style={titleStyle}>Resume Generator</h1>
            </div>
            <div style={headerActionsStyle}>
              <div style={saveStatusStyle}>
                <Save style={{ width: "1rem", height: "1rem" }} />
                <span>{isSaved ? "Saved" : "Saving..."}</span>
              </div>
              <button
                onClick={handlePrint}
                style={btnPrimaryStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#1d4ed8")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#2563eb")
                }
              >
                <Download style={{ width: "1rem", height: "1rem" }} /> Export
                PDF
              </button>
              <button
                onClick={clearAllData}
                style={btnSecondaryStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#e5e7eb")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#f3f4f6")
                }
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div style={contentStyle}>
        <div style={layoutStyle}>
          <div style={formSectionStyle}>
            <div style={sectionCardStyle}>
              <div style={navigationGridStyle}>
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    style={navButtonStyle(activeSection === sec.id)}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>
            </div>
            <div style={sectionCardStyle}>
              <h2 style={sectionTitleStyle}>
                {sections.find((s) => s.id === activeSection)?.label}
              </h2>
              {renderActiveForm()}
            </div>
          </div>

          <div style={previewSectionStyle}>
            <div style={previewContainerStyle}>
              <div style={previewCardStyle}>
                <h2 style={previewTitleStyle}>Live Preview</h2>
                <div style={resumeContainerStyle}>
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
