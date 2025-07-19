import React from 'react';
import './Card.css';

const Card = ({ imagem, virada, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className={`inner ${virada ? 'virada' : ''}`}>
        <div className="frente"></div>
        <div className="verso">
          <img src={imagem} alt="carta" />
        </div>
      </div>
    </div>
  );
};

export default Card;
