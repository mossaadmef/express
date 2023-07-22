// src/components/WorkingHours.js
import React from 'react';

const WorkingHours = ({ children }) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const isWorkingHours = day >= 1 && day <= 5 && hour >= 9 && hour < 17;

  return isWorkingHours ? children : <p>Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).</p>;
};

export default WorkingHours;
