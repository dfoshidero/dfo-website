import React, { useState } from 'react';
import './Projects.scss';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import bloomImage from '../../assets/images/project-icons/bloom.png';
import chip8Image from '../../assets/images/project-icons/chip-8.png';

const projects = [
  {
    id: 3,
    title: "CHIP-8 Emulator // Ongoing",
    description: "This emulator aims to replicate the behaviour of a CHIP-8 machine, allowing users to run and interact with CHIP-8 programs.",
    stack: "C, SDL2",
    imageUrl: chip8Image,
    projectUrl: "https://github.com/dfoshidero/CHIP-8-Emulator",
  },
  {
    id: 2,
    title: "Bloom",
    description: "Bloom is an educational mobile app by Team Plum for University of Bath's CM50109 module. It teaches indoor plant care and offers interactive gameplay with rewards.",
    stack: "JavaScript with React-Native, Expo, Node.js",
    imageUrl: bloomImage,
    projectUrl: "https://github.com/dfoshidero/Bloom",
    videoUrl: "https://www.youtube.com/watch?v=v2pALOEpWOQ"
  },
  {
    id: 1,
    title: "Airline Database Simulator",
    stack: "Python with Tkinter, SQLite3",
    description: "Basic database simulator developed to explore data management in the context of a real-world system.",
    projectUrl: "https://github.com/dfoshidero/Airline-Database-Sim",
  },
];

  export default function ProjectsCard() {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleProjectClick = (url, event) => {
      event.stopPropagation();
      window.open(url, '_blank');
    };
  
    return (
      <div className="projects-container">
        <div className="more-info-text">
          <span>Click item to see more...</span> 
        </div>
        <ul className="projects-list">
          {projects.map(project => (
            <li key={project.id} 
                className={`project-item ${isHovered ? 'no-hover' : ''} ${!project.videoUrl ? 'no-action-button' : ''}`} 
                onClick={(event) => handleProjectClick(project.projectUrl, event)}>
              <div className="project-image-and-actions">
                {project.imageUrl && (
                    <div className="project-image-container">
                      <img src={project.imageUrl} alt={project.title} className="project-image" />
                    </div>
                )}
                {project.videoUrl && (
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="view-button" onClick={(event) => { event.stopPropagation(); window.open(project.videoUrl, '_blank'); }} onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}>
                    Demo <PlayCircleOutlineIcon className="button-icon" />
                  </a>
                )}
              </div>
              <div className="project-details">
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-stack">Stack: {project.stack}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  