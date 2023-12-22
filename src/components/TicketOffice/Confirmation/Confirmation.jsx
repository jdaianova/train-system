import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/final');
  };

  return (
    <div>
      <div>Confirmation Information</div>
      <button onClick={handleNavigate}>Go to Final Page</button>
    </div>
  );
};

export default Confirmation;
