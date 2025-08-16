import React, { forwardRef } from 'react';

const ResumePreview = forwardRef(({ data }, ref) => {
 
  const isMobile = window.innerWidth < 768;

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
        {index < contacts.length - 1 && <span style={{ margin: '0 0.5em' }}>|</span>}
      </React.Fragment>
    ));
  };

  const formatSkillsSection = () => {
    const { programmingLanguages, frameworks, tools, databases } = data.skills;
    const skillCategories = [
      { name: 'Programming Languages & Databases', items: programmingLanguages },
      { name: 'Frameworks & Libraries', items: frameworks },
      { name: 'Tools & Technologies', items: tools },
      { name: 'Soft Skills', items: databases }
    ].filter(category => category.items.length > 0);

    return skillCategories;
  };

  const resumeStyle = {
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
    fontSize: isMobile ? '10pt' : '11pt',
    color: '#666666',
    lineHeight: '1.4',
    maxWidth: '8.5in',
    padding: isMobile ? '0.3in' : '0.5in',
    backgroundColor: '#fff',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '0.5em'
  };

  const nameStyle = {
    fontFamily: "'Charter', 'Georgia', serif",
    fontSize: isMobile ? '1.8em' : '2em',
    color: '#130810',
    marginBottom: '2pt',
    fontWeight: 'bold'
  };

  const contactInfoStyle = {
    fontSize: '0.9em',
    color: '#666666'
  };

  const sectionStyle = {
    marginBottom: '0.5em'
  };

  const sectionTitleStyle = {
    fontFamily: "'Charter', 'Georgia', serif",
    fontSize: isMobile ? '1.1em' : '1.2em',
    color: 'rgb(36%, 54%, 66%)',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: '0.1em',
    borderBottom: '1px solid #130810',
    paddingBottom: '5pt'
  };

  const resumeSubheadingStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'baseline',
    marginBottom: '7pt',
    flexDirection: isMobile ? 'column' : 'row'
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.1em',
    color: '#130810'
  };

  const subtitleStyle = {
    fontStyle: 'bold',
    fontSize: '1em',
    color: '#130810'
  };

  const locationDateStyle = {
    fontStyle: 'italic',
    fontSize: isMobile ? '0.85em' : '0.9em',
    color: '#130810'
  };

  const itemListStyle = {
    listStyle: 'none',
    marginLeft: '0.1in',
    marginBottom: '-5pt'
  };

  const itemStyle = {
    position: 'relative',
    paddingLeft: '0.5em',
    marginBottom: '0.2em',
    fontSize: '0.9em',
    color: '#666666'
  };

  const skillsListStyle = {
    listStyle: 'none'
  };

  const skillItemStyle = {
    marginBottom: '1.2pt'
  };

  const skillCategoryStyle = {
    fontWeight: 'bold',
    fontSize: '1em',
    color: '#130810'
  };

  const skillItemsStyle = {
    color: '#666666'
  };

  const linkStyle = {
    color: '#0E5484',
    textDecoration: 'none'
  };

  return (
    <div ref={ref} style={resumeStyle}>
      {/* Header */}
      <header style={headerStyle}>
        {data.personalInfo.fullName && (
          <h1 style={nameStyle}>{data.personalInfo.fullName}</h1>
        )}
        <div style={contactInfoStyle}>
          {formatContactInfo()}
        </div>
      </header>

      {/* Summary */}
      {hasContent(data.summary) && (
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Summary</h2>
          <p>{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {hasContent(data.experience) && (
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Experience</h2>
          {data.experience.map(exp => (
            <div key={exp.id}>
              <div style={resumeSubheadingStyle}>
                <div>
                  <div style={titleStyle}>{exp.position}</div>
                  <div style={subtitleStyle}>{exp.company}</div>
                </div>
                <div>
                  <div style={locationDateStyle}>{exp.location}</div>
                  <div style={locationDateStyle}>
                    {exp.startDate && exp.endDate 
                      ? `${exp.startDate} – ${exp.endDate}`
                      : exp.startDate || exp.endDate
                    }
                  </div>
                </div>
              </div>
              {exp.description.length > 0 && (
                <ul style={itemListStyle}>
                  {exp.description.map((desc, index) => (
                    <li key={index} style={{
                      ...itemStyle,
                      '::before': {
                        content: '"•"',
                        position: 'absolute',
                        left: '0',
                        fontSize: '0.6em',
                        color: '#666666',
                        lineHeight: '1.4'
                      }
                    }}>
                      <span style={{ position: 'absolute', left: '0', fontSize: '0.6em', lineHeight: '1.4' }}>•</span>
                      {desc.replace(/^•\s*/, '')}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {hasContent(data.education) && (
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Education</h2>
          {data.education.map(edu => (
            <div key={edu.id}>
              <div style={resumeSubheadingStyle}>
                <div>
                  <div style={titleStyle}>{edu.institution}</div>
                  <div style={subtitleStyle}>
                    {edu.degree}{edu.field && ` , ${edu.field}`}
                    <br />
                    {edu.gpa && `Aggregrate: ${edu.gpa}`}
                  </div>
                </div>
                <div>
                  <div style={locationDateStyle}>{edu.location}</div>
                  <div style={locationDateStyle}>
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
      )}

      {/* Technical Skills */}
      {hasContent(data.skills) && (
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Technical Skills</h2>
          <ul style={skillsListStyle}>
            {formatSkillsSection().map((category, index) => (
              <li key={index} style={skillItemStyle}>
                <span style={skillCategoryStyle}>{category.name}: </span>
                <span style={skillItemsStyle}>{category.items.join(', ')}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      {hasContent(data.projects) && (
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Projects</h2>
          {data.projects.map(project => (
            <div key={project.id}>
              <div style={resumeSubheadingStyle}>
                <div>
                  <div style={titleStyle}>
                    {project.liveLink ? (
                      <a href={project.liveLink} style={linkStyle}>{project.name}</a>
                    ) : (
                      project.name
                    )}
                    {project.githubLink && (
                      <>
                        {'    • '}
                        <a href={project.githubLink} style={linkStyle}>GitHub</a>
                      </>
                    )}
                  </div>
                  {project.technologies && (
                    <div style={subtitleStyle}>Tech Stack : {project.technologies}</div>
                  )}
                </div>
              </div>
              {project.description.length > 0 && (
                <ul style={itemListStyle}>
                  {project.description.map((desc, index) => (
                    <li key={index} style={itemStyle}>
                      <span style={{ position: 'absolute', left: '0', fontSize: '0.6em', lineHeight: '1.4' }}>•</span>
                      {desc.replace(/^•\s*/, '')}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {hasContent(data.achievements) && (
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Achievements</h2>
          <ul style={itemListStyle}>
            {data.achievements.map(achievement => (
              <li key={achievement.id} style={itemStyle}>
                <span style={{ position: 'absolute', left: '0', fontSize: '0.6em', lineHeight: '1.4' }}>•</span>
                <strong>{achievement.title}</strong>
                {achievement.date && ` (${achievement.date})`}
                {achievement.description && ` - ${achievement.description}`}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Extracurricular Activities */}
      {hasContent(data.extracurriculars) && (
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Extracurricular Activities</h2>
          {data.extracurriculars.map(extra => (
            <div key={extra.id}>
              <div style={resumeSubheadingStyle}>
                <div>
                  <div style={titleStyle}>{extra.organization}</div>
                  {extra.position && (
                    <div style={subtitleStyle}>{extra.position}</div>
                  )}
                </div>
                <div style={locationDateStyle}>
                  {extra.startDate && extra.endDate 
                    ? `${extra.startDate} – ${extra.endDate}`
                    : extra.startDate || extra.endDate
                  }
                </div>
              </div>
              {extra.description.length > 0 && (
                <ul style={itemListStyle}>
                  {extra.description.map((desc, index) => (
                    <li key={index} style={itemStyle}>
                      <span style={{ position: 'absolute', left: '0', fontSize: '0.6em', lineHeight: '1.4' }}>•</span>
                      {desc.replace(/^•\s*/, '')}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;