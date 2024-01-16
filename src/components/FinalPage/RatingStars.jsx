import React, { useState } from 'react';
import Star from './Star';

const RatingStars = () => {
  const [rating, setRating] = useState(0);

  const handleSetRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className='RatingStars'>
      <p>Оценить сервис</p>
      <div className='RatingStars-container'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            color={star <= rating ? 'white' : 'none'}
            onClick={() => handleSetRating(star)}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingStars;
