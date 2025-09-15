import React from 'react';
import './Education.scss';

const EducationItems = [
  {
    id: 1,
    title: '2014 - 2018',
    description: 'Short description of project 1.',
    subtitle:
      'Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc'
  },
  {
    id: 2,
    title: '2012 - 2014',
    description: 'Short description of project 2.',
    subtitle:
      'Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.dolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipiscdolor sit amet, consectetur adipisc'
  },
  {
    id: 3,
    title: '2012 - 2014',
    description: 'Short description of project 2.',
    subtitle: 'Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 4,
    title: '2012 - 2014',
    description: 'Short description of project 2.',
    subtitle: 'Nemo Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const SkillsItems = [
  { id: 1, name: 'HTML', score: 90, icon: 'html' },
  { id: 2, name: 'CSS', score: 85, icon: 'css' },
  { id: 3, name: 'JavaScript', score: 80, icon: 'javascript' },
  { id: 4, name: 'Python', score: 70, icon: 'python' },
  { id: 5, name: 'Photoshop', score: 60, icon: 'photoshop' },
  { id: 6, name: 'C++', score: 50, icon: 'c++' }
];

const Education = () => {
  return (
    <div className='education'>
      <h3 className='education-title'>Education & skill</h3>
      <h1 className='education-subtitle'>Showcasing your talent amplifying your impact</h1>
      <div className='portfolio-grid'>
        {EducationItems.map(({ id, title, description, subtitle }) => (
          <div key={id} className='portfolio-item'>
            <h3 className='portfolio-title'>{title}</h3>
            <p className='portfolio-description'>{description}</p>
            <p className='portfolio-subtitle'>{subtitle}</p>
          </div>
        ))}
      </div>
      <div className='skills'>
        <div className='skills-grid'>
          {SkillsItems.map(({ id, name, score, icon }) => (
            <div key={id} className='skill-card'>
              <div className='skill-header'>
                <img className='skill-icon-img' src={`./src/assets/icons/${icon}.png`} alt={`${name} icon`} />
                <span className='skill-name'>{name}</span>
              </div>
              <div className='skill-bar' role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={score}>
                <div className='skill-bar-fill' style={{ width: `${score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
