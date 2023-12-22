import React from 'react';
import Card from '../components/card/Card';
import { ExperienceCard } from "../pages/experience/Experience";
import AnalogClock from '../pages/time/analog/AnalogClock';

export const layouts = [
    // Layout 1
    () => (
      <>
        <Card title="EXPERIENCE" className="card--two-columns card--three-rows" >
          <ExperienceCard />
        </Card>
        <Card title="TIMEZONE" extra="London, UK" className="card--one-column card--one-rows">
          <AnalogClock />
        </Card>
        <Card title="CONNECT" className="card--one-column card--one-rows"></Card>
        <Card title="PROJECTS" className="card--two-columns card--two-rows"></Card>
        <Card title="MY WORK(S)" className="card--two-columns card--two-rows"></Card>
        <Card title="EDUCATION" className="card--two-columns card--two-rows"></Card>
        <Card title="RECOMMENDATIONS" className="card--two-columns card--one-row"></Card>
        <Card title="STATUS" className="card--two-columns card--one-rows"></Card>
      </>
    ),
    // Layout 2
    () => (
      <>
        <Card title="EXPERIENCE" className="card--two-columns card--three-rows" >
          <ExperienceCard />
        </Card>
        <Card title="TIMEZONE" extra="London, UK" className="card--one-column card--one-rows">
          <AnalogClock />
        </Card>
        <Card title="CONNECT" className="card--one-column card--one-rows"></Card>
        <Card title="PROJECTS" className="card--two-columns card--two-rows"></Card>
        <Card title="MY WORK(S)" className="card--two-columns card--two-rows"></Card>
        <Card title="EDUCATION" className="card--two-columns card--two-rows"></Card>
        <Card title="RECOMMENDATIONS" className="card--two-columns card--one-row"></Card>
        <Card title="STATUS" className="card--two-columns card--one-rows"></Card>
      </>
    ),
    // Layout 3
    () => (
      <>
        <Card title="EXPERIENCE" className="card--two-columns card--three-rows" >
          <ExperienceCard />
        </Card>
        <Card title="TIMEZONE" extra="London, UK" className="card--one-column card--one-rows">
          <AnalogClock />
        </Card>
        <Card title="CONNECT" className="card--one-column card--one-rows"></Card>
        <Card title="PROJECTS" className="card--two-columns card--two-rows"></Card>
        <Card title="MY WORK(S)" className="card--two-columns card--two-rows"></Card>
        <Card title="EDUCATION" className="card--two-columns card--two-rows"></Card>
        <Card title="RECOMMENDATIONS" className="card--two-columns card--one-row"></Card>
        <Card title="STATUS" className="card--two-columns card--one-rows"></Card>
      </>
    ),
    // Add more layouts as needed
  ];