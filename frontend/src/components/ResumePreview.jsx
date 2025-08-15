import React, { forwardRef } from 'react';

const ResumePreview = forwardRef(({ data, sectionOrder = [], visibleSections = [] }, ref) => {
  const hasContent = (section) => {
    if (Array.isArray(section)) {
      return section.length > 0;
    }
    if (typeof section === 'object') {
      return Object.values(section).some(value => 
        Array.isArray(value) ? value.length > 0 : Boolean(value)
      );
    }
    return Boolean(section);
  };

  const formatContactInfo = () => {
    const { email, phone, linkedin, github, website } = data.personalInfo;
    const contacts = [];
    
    if (email) contacts.push(<a key="email" href={`mailto:${email}`}>{email}</a>);
    if (phone) contacts.push(<span key="phone">{phone}</span>);
    if (linkedin) contacts.push(<a key="linkedin" href={linkedin}>LinkedIn</a>);
    if (github) contacts.push(<a key="github" href={github}>GitHub</a>);
    if (website) contacts.push(<a key="website" href={website}>Portfolio</a>);
    
    return contacts.map((contact, index) => (
      <React.Fragment key={index}>
        {contact}
        {index < contacts.length - 1 && <span className="separator">|</span>}
      </React.Fragment>
    ));
  };

  const formatSkillsSection = () => {
    const { programmingLanguages, frameworks, tools, databases } = data.skills;
    const skillCategories = [
      { name: 'Programming Languages', items: programmingLanguages },
      { name: 'Frameworks & Libraries', items: frameworks },
      { name: 'Tools & Technologies', items: tools },
      { name: 'Databases', items: databases }
    ].filter(category => category.items.length > 0);

    return skillCategories;
  };

  const getFontFamily = () => {
    const fontMap = {
      cormorant: "'Cormorant Garamond', 'Georgia', serif",
      arial: "'Arial', sans-serif",
      times: "'Times New Roman', serif",
      helvetica: "'Helvetica', 'Arial', sans-serif",
      georgia: "'Georgia', serif",
      calibri: "'Calibri', sans-serif"
    };
    return fontMap[data.fontSettings?.fontFamily] || fontMap.cormorant;
  };

  const getCustomStyles = () => {
    const settings = data.fontSettings || {};
    return {
      fontFamily: getFontFamily(),
      fontSize: settings.fontSize || '11pt',
      lineHeight: settings.lineHeight || 1.4
    };
  };

  const getHeadingStyles = () => {
    const settings = data.fontSettings || {};
    return {
      fontWeight: settings.boldHeadings ? 'bold' : 'normal'
    };
  };

  const getSubtitleStyles = () => {
    const settings = data.fontSettings || {};
    return {
      fontStyle: settings.italicSubtitles ? 'italic' : 'normal'
    };
  };

  const getLinkStyles = () => {
    const settings = data.fontSettings || {};
    return {
      textDecoration: settings.underlineLinks ? 'underline' : 'none'
    };
  };

  const renderSection = (sectionId) => {
    if (!visibleSections.includes(sectionId)) return null;

    switch (sectionId) {
      case 'summary':
        return hasContent(data.summary) && (
          <section key="summary">
            <h2 style={getHeadingStyles()}>Summary</h2>
            <p>{data.summary}</p>
          </section>
        );

      case 'experience':
        return hasContent(data.experience) && (
          <section key="experience">
            <h2 style={getHeadingStyles()}>Experience</h2>
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div className="resume-subheading">
                  <div>
                    <div className="title" style={getHeadingStyles()}>{exp.position}</div>
                    <div className="subtitle" style={getSubtitleStyles()}>{exp.company}</div>
                  </div>
                  <div>
                    <div className="location" style={getSubtitleStyles()}>{exp.location}</div>
                    <div className="date" style={getSubtitleStyles()}>
                      {exp.startDate && exp.endDate 
                        ? `${exp.startDate} – ${exp.endDate}`
                        : exp.startDate || exp.endDate
                      }
                    </div>
                  </div>
                </div>
                {exp.description.length > 0 && (
                  <ul className="resume-item-list">
                    {exp.description.map((desc, index) => (
                      <li key={index}>{desc.replace(/^•\s*/, '')}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        );

      case 'education':
        return hasContent(data.education) && (
          <section key="education">
            <h2 style={getHeadingStyles()}>Education</h2>
            {data.education.map(edu => (
              <div key={edu.id}>
                <div className="resume-subheading">
                  <div>
                    <div className="title" style={getHeadingStyles()}>{edu.institution}</div>
                    <div className="subtitle" style={getSubtitleStyles()}>
                      {edu.degree}{edu.field && `, ${edu.field}`}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </div>
                  </div>
                  <div>
                    <div className="location" style={getSubtitleStyles()}>{edu.location}</div>
                    <div className="date" style={getSubtitleStyles()}>
                      {edu.startDate && edu.endDate 
                        ? `${edu.startDate} – ${edu.endDate}`
                        : edu.startDate || edu.endDate
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        );

      case 'skills':
        return hasContent(data.skills) && (
          <section key="skills">
            <h2 style={getHeadingStyles()}>Technical Skills</h2>
            <ul className="skills-list">
              {formatSkillsSection().map((category, index) => (
                <li key={index}>
                  <span className="category" style={getHeadingStyles()}>{category.name}: </span>
                  <span className="items">{category.items.join(', ')}</span>
                </li>
              ))}
            </ul>
          </section>
        );

      case 'projects':
        return hasContent(data.projects) && (
          <section key="projects">
            <h2 style={getHeadingStyles()}>Projects</h2>
            {data.projects.map(project => (
              <div key={project.id}>
                <div className="resume-subheading">
                  <div>
                    <div className="title" style={getHeadingStyles()}>
                      {project.liveLink ? (
                        <a href={project.liveLink} style={getLinkStyles()}>{project.name}</a>
                      ) : (
                        project.name
                      )}
                      {project.githubLink && (
                        <>
                          {' • '}
                          <a href={project.githubLink} style={getLinkStyles()}>GitHub</a>
                        </>
                      )}
                    </div>
                    {project.technologies && (
                      <div className="subtitle" style={getSubtitleStyles()}>{project.technologies}</div>
                    )}
                  </div>
                </div>
                {project.description.length > 0 && (
                  <ul className="resume-item-list">
                    {project.description.map((desc, index) => (
                      <li key={index}>{desc.replace(/^•\s*/, '')}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        );

      case 'achievements':
        return hasContent(data.achievements) && (
          <section key="achievements">
            <h2 style={getHeadingStyles()}>Achievements</h2>
            <ul className="resume-item-list">
              {data.achievements.map(achievement => (
                <li key={achievement.id}>
                  <strong>{achievement.title}</strong>
                  {achievement.date && ` (${achievement.date})`}
                  {achievement.description && ` - ${achievement.description}`}
                </li>
              ))}
            </ul>
          </section>
        );

      case 'extracurriculars':
        return hasContent(data.extracurriculars) && (
          <section key="extracurriculars">
            <h2 style={getHeadingStyles()}>Extracurricular Activities</h2>
            {data.extracurriculars.map(extra => (
              <div key={extra.id}>
                <div className="resume-subheading">
                  <div>
                    <div className="title" style={getHeadingStyles()}>{extra.organization}</div>
                    {extra.position && (
                      <div className="subtitle" style={getSubtitleStyles()}>{extra.position}</div>
                    )}
                  </div>
                  <div className="date" style={getSubtitleStyles()}>
                    {extra.startDate && extra.endDate 
                      ? `${extra.startDate} – ${extra.endDate}`
                      : extra.startDate || extra.endDate
                    }
                  </div>
                </div>
                {extra.description.length > 0 && (
                  <ul className="resume-item-list">
                    {extra.description.map((desc, index) => (
                      <li key={index}>{desc.replace(/^•\s*/, '')}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={ref} className="resume-preview" style={getCustomStyles()}>
      {/* Header */}
      <header>
        {data.personalInfo.fullName && (
          <h1 style={getHeadingStyles()}>{data.personalInfo.fullName}</h1>
        )}
        <div className="contact-info">
          <span style={getLinkStyles()}>{formatContactInfo()}</span>
        </div>
      </header>

      {/* Render sections in custom order */}
      {sectionOrder.map(section => renderSection(section.id))}
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;