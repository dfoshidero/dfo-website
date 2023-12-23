import React from 'react';
import Card from '../components/card/Card';
import ExperienceCard from "../content/experience/Experience";
import EducationCard from '../content/education/Education';
import AnalogClock from '../content/time/analog/AnalogClock';

export const layouts = [
    // Layout 1
    () => (
      <>
        <Card title="EXPERIENCE" className="card two-columns three-rows" >
          <ExperienceCard />
        </Card>
        <Card title="TIMEZONE" extra="London, UK" className="one-column one-row">
          <AnalogClock />
        </Card>
        <Card title="CONNECT" className="card one-column one-row"></Card>
        <Card title="PROJECTS" className="card two-columns two-rows"></Card>
        <Card title="MY WORK(S)" className="card two-columns two-rows"></Card>
        <Card title="EDUCATION" className="card two-columns two-rows">
          <EducationCard />
        </Card>
        <Card title="RECOMMENDATIONS" className="card two-columns one-row"></Card>
        <Card title="STATUS" className="card two-columns one-row"></Card>
      </>
    ),
    // Layout 2
    () => (
      <>
        <Card title="EXPERIENCE" className="card two-columns three-rows" >
          <ExperienceCard />
        </Card>
        <Card title="TIMEZONE" extra="London, UK" className="card one-column one-row">
          <AnalogClock />
        </Card>
        <Card title="CONNECT" className="card one-column one-row"></Card>
        <Card title="PROJECTS" className="card two-columns two-rows"></Card>
        <Card title="MY WORK(S)" className="card two-columns two-rows"></Card>
        <Card title="EDUCATION" className="card two-columns two-rows">
        <EducationCard />
        </Card>
        <Card title="RECOMMENDATIONS" className="card two-columns one-row"></Card>
        <Card title="STATUS" className="card two-columns one-row"></Card>
      </>
    ),
    // Layout 3
    () => (
      <>
        <Card title="EXPERIENCE" className="card two-columns three-rows" >
          <ExperienceCard />
        </Card>
        <Card title="TIMEZONE" extra="London, UK" className="card one-column one-row">
          <AnalogClock />
        </Card>
        <Card title="CONNECT" className="card one-column one-row"></Card>
        <Card title="PROJECTS" className="card two-columns two-rows"></Card>
        <Card title="MY WORK(S)" className="card two-columns two-rows"></Card>
        <Card title="EDUCATION" className="card two-columns two-rows">
        <EducationCard />
        </Card>
        <Card title="RECOMMENDATIONS" className="card two-columns one-row"></Card>
        <Card title="STATUS" className="card two-columns one-row"></Card>
      </>
    ),
    // Add more layouts as needed
  ];