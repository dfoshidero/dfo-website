import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';

import "./Skills.scss";

const skills = [
  {
    id: 1,
    skill: "Cloud Services",
    certified: true,
    link: "https://www.credly.com/badges/4c769782-1735-4aae-b652-1413a1e65b75/linked_in_profile",
  },
  {
    id: 2,
    skill: "Web Development",
    completed: true,
    link: "https://www.udemy.com/certificate/UC-f3a9d97a-913d-453e-b471-ed31b2479a4e/",
  },

  {
    id: 3,
    skill: "C (Programming Language)",
    completed: true,
    link: "https://www.udemy.com/certificate/UC-8d4d39f2-4002-415b-beb5-1eb00c24ec2e/",
  },
  {
    id: 4,
    skill: "JavaScript",
  },
  {
    id: 5,
    skill: "HTML/CSS",
  },
  {
    id: 6,
    skill: "React || React-Native",
  },
  {
    id: 7,
    skill: "Python",
  },
  {
    id: 8,
    skill: "SQL",
  },
  {
    id: 9,
    skill: "MongoDB",
  },
  {
    id: 10,
    skill: "Microsoft Power BI",
  },
  {
    id: 11,
    skill: "Autodesk Revit  ",
    certified: true,
    link: "https://www.linkedin.com/in/favourdo/details/certifications/1707000019275/single-media-viewer/?profileId=ACoAACmhpvMB9MywAsViJ_T-Bq76dnz12-1Zx6c",
  },
  {
    id: 12,
    skill: "Autodesk AutoCAD",
  },
  {
    id: 13,
    skill: "Adobe Photoshop",
  },
  {
    id: 14,
    skill: "Adobe Indesign",
  },
  {
    id: 15,
    skill: "Enscape",
  },
];

export default function SkillsCard() {
	return (
		<div className="skills-container">
			<ul className="skills-list">
				{skills.map((item) => (
					<li key={item.id} className="skills-item">
						<span className="skills-title">{item.skill}</span>
						{item.certified && item.link && (
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="certified-section"
							>
								<span className="certified-label">CERTIFIED</span>
								<VerifiedIcon className="certified-icon" />
							</a>
						)}
						{item.certified && !item.link && (
							<div className="certified-section non-clickable">
								<span className="certified-label">CERTIFIED</span>
								<VerifiedIcon className="certified-icon" />
							</div>
						)}
						{item.completed && item.link && (
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="completed-section"
							>
								<span className="completed-label">COURSE</span>
								<VerifiedIcon className="completed-icon" />
							</a>
						)}
						{item.completed && !item.link && (
							<div className="completed-section non-clickable">
								<span className="completed-label">COURSE</span>
								<VerifiedIcon className="completed-icon" />
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
