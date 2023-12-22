import React from 'react';
import { useNavigate } from 'react-router-dom';

const PayPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/ticketoffice/confirmation');
  };

  return (
    <div>
      <div>Payment Information</div>
      <button onClick={handleNavigate}>Confirm Payment</button>
    </div>
  );
};

export default PayPage;
