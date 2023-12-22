import React, { useContext } from 'react';

import { ModalContext } from '../../utils/modalContext';

import './Experience.scss';

const experiences = [
  {
    id: 1,
    title: "Graduate Data Analyst // KTC",
    location: "Wolverhampton, England, United Kingdom",
    shortdesc: "Migration of BI data from CSV to an automated SQL database, and automation of Sales Reporting Dashboard for reducion of manual errors and improved reporting efficiency.",
    longdesc: "..."
    // More details can be added here if needed
  },
  {
    id: 2,
    title: "Data Science Intern // Datern",
    location: "Remote",
    shortdesc: "Datern programme included SQL, PowerBI, and Python for Data Analysis. Contributed through data insight extractions, data cleaning and processing, impactful visualizations, utilisation of web scraping and machine learning techniques, and active participation in team meetings and discussions.",
    longdesc: "..."
    // More details can be added here if needed
  },
  {
    id: 3,
    title: "Skills Co-Creator & Senior Ambassador // University of Bath",
    location: "Bath, England, United Kingdom | Hybrid",
    shortdesc: "Collaborated on the improvement and promotion of resources for the University's Skill Centre. Largely focused on program design, content review, and video creation on various topics.",
    longdesc: "..."
    // More details can be added here if needed
  },
  {
    id: 4,
    title: "Chair // University of Bath African-Caribbean Society",
    location: "Bath, England, United Kingdom",
    shortdesc: "Directed the ACS within external and internal contexts, overseeing committee affairs, ensuring member wellbeing, managing finances, organizing events, and representing the student group in marketing and communication concerns.",
    longdesc: "..."
    // More details can be added here if needed
  },
  {
    id: 5,
    title: "Architectural Assistant // Foster + Partners",
    location: "London, England, United Kingdom",
    shortdesc: "Contributed as part of a team responsible for the design of hotel section of a large-scale resort project in the Middle East. Utilized CAD and BIM modelling software, generated 3D renders, and designed distribution diagrams.",
    longdesc: "..."
    // More details can be added here if needed
  },
  {
    id: 6,
    title: "Architectural Assistant // RS Architects",
    location: "Barnet, England, United Kingdom",
    shortdesc: "Handled tasks ranging production of sketches, CAD development, and planning submission for residential projects. Further undertook general office management responsibilities.",
    longdesc: "..."
    // More details can be added here if needed
  },
  {
    id: 7,
    title: "RIBA Mentee (Internship) // Allford Hall Monoghan Morris",
    location: "Bristol, England, United Kingdom",
    shortdesc: "...",
    longdesc: "..."
    // More details can be added here if needed
  }

  // ... other experiences
];

export function ExperienceCard() {
  const { openModal } = useContext(ModalContext);

  return (
    <ul className="experience-list">
      {experiences.map(exp => (
        <li
        key={exp.id}
        className="experience-item"
        onClick={() => {
          openModal(
            <div className="experience-modal-content">
              <h2>{exp.title}</h2>
              <h3>{exp.location}</h3>
              <p>{exp.longdesc}</p>
            </div>
          );
        }}
      >
          <div className="experience-title">{exp.title}</div>
          <div className="experience-shortdesc">{exp.shortdesc}</div>
          <div className="experience-location">{exp.location}</div>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {

}