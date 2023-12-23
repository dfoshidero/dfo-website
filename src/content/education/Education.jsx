import React from 'react';

import './Education.scss';

const educations = [
  {
    id: 1,
    title: "Master of Science (M.Sc) // Computer Science",
    location: "Bath, United Kingdom",
    school: "University of Bath",
    graduation: "Exp. 2024",
    achieved: ""
    // More details can be added here if needed
  },
  {
    id: 2,
    title: "Bachelor of Science with Honours (B.Sc Hons) // Architecture",
    location: "Bath, United Kingdom",
    school: "University of Bath",
    graduation: "Grad. 2023",
    achieved: "2:1"
    // More details can be added here if needed
  },
  {
    id: 3,
    title: "Advanced-Level Qualifications // Art, Physcs, Maths",
    location: "London, United Kingdom",
    school: "Harlington School",
    graduation: "Grad. 2019",
    achieved: "A*, A, A"
    // More details can be added here if needed
  },
  
];

export default function EducationCard() {

  return (
    <ul className="education-list">
      {educations.map(ed => (
        <li
        key={ed.id}
        className="education-item"
      >
          <div className="education-title">{ed.title}</div>
          <div className="education-grad">{ed.graduation}. {ed.achieved}</div>
          <div className="education-location">{ed.school} | {ed.location}</div>
        </li>
      ))}
    </ul>
  );
}
