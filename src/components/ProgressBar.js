import React from 'react';

const ProgressBar = ({ totalMilestones, milestonesCompleted }) => {
  // Calculate progress percentage
  const progressPercentage = (milestonesCompleted / totalMilestones) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progressPercentage}%` }} />
      <div className="circle" style={{ left: '0px', transform: 'translate(-50%, -50%)' }} />
      <div className="circle" style={{ left: '150px', transform: 'translate(-50%, -50%)' }} />
      <div className="circle" style={{ left: '300px', transform: 'translate(-50%, -50%)' }} />
      <div className="circle" style={{ left: '450px', transform: 'translate(-50%, -50%)' }} />
      <div className="circle" style={{ left: '600px', transform: 'translate(-50%, -50%)' }} />
      <div className="circle" style={{ left: '750px', transform: 'translate(-50%, -50%)' }} />
    </div>
  );
};

export default ProgressBar;