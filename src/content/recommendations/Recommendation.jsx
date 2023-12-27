// Recommendation.jsx

import React from 'react';
import './Recommendation.scss'; // Assuming you have a separate SCSS file for recommendations

const recommendation = {
  text: "Daniel joined KTC during his summer holidays working alongside me in our Data Analytics program. He was given the sub-project of normalising the data structure and associated data ETL, of an existing Commercial Dashboard. His objective was to normalise the data structure, update the ETL and produce documentation including a data dictionary. He showed himself to be self-motivated and applied his knowledge to great effect in delivering only the initial scope, but also additional requirements. He was thorough and interacted very well with the rest of team and left with a delivered solution ready for business users. I would have no hesitation in recommending Daniel from his time spent here at KTC",
  recommender: "Christopher Walter",
  role: "Interim Transformations Programs IT Director, KTC (Edibles) Ltd."
};

export default function RecommendationCard() {
  return (
    <div className="recommendation-container">
      <div className="recommendation-text">{recommendation.text}</div>
      <div className="recommendation-recommender">{recommendation.recommender}</div>
      <div className="recommendation-recommender">{recommendation.role}</div>
    </div>
  );
}
