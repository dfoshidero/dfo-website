import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';

import "./Skills.scss";

const skills = [
    {
        id: 1,
        skill: "Web Development",
        certified: true,
        link:"https://www.udemy.com/certificate/UC-f3a9d97a-913d-453e-b471-ed31b2479a4e/"
    },
    {
        id: 2,
        skill: "Cloud Services",
        certified: true,
        link:"https://www.credly.com/badges/4c769782-1735-4aae-b652-1413a1e65b75/linked_in_profile"
    },
    {
        id: 3,
        skill: "JavaScript",
        certified: false
    },
    {
        id: 4,
        skill: "HTML/CSS",
        certified: false
    },
    {
        id: 5,
        skill: "React || React-Native",
        certified: false
    },
    {
        id: 6,
        skill: "C",
        certified: false
    },
    {
        id: 7,
        skill: "Python",
        certified: false
    },
    {
        id: 8,
        skill: "SQL",
        certified: false
    },
    {
        id: 9,
        skill: "MongoDB",
        certified: false
    },
    {
        id: 10,
        skill: "Microsoft Power BI",
        certified: false
    },
    {
        id: 11,
        skill: "Autodesk Revit  ",
        certified: true
    },
    {
        id: 12,
        skill: "Autodesk AutoCAD",
        certified: false
    },
    {
        id: 13,
        skill: "Adobe Photoshop",
        certified: false
    },
    {
        id: 14,
        skill: "Adobe Indesign",
        certified: false
    },
    {
        id: 15,
        skill: "Enscape",
        certified: false
    },
];

export default function SkillsCard() {
    return (
        <div className="skills-container">
            <ul className="skills-list">
                {skills.map(item => (
                    <li key={item.id} className="skills-item">
                        <span className="skills-title">{item.skill}</span>
                        {item.certified && item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="certified-section">
                                <span className="certified-label">CERTIFIED</span>
                                <VerifiedIcon className="certified-icon" />
                            </a>
                        ) : item.certified && (
                            <div className="certified-section non-clickable">
                                <span className="certified-label">CERTIFIED</span>
                                <VerifiedIcon className="certified-icon" />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}