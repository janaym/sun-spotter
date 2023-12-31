import React from 'react';
import { Link } from "react-router-dom";
import '../styles/SavedSpotCard.scss';

export default function SavedSpotCard({ spot, view }) {

  return (
    <Link to={`/spots/${spot.id}`} className='savedSpotCard__container'>
      <div className='savedSpotCard__image'>
        <img src={`http://localhost:8080/${spot.image_url}`} alt='The sun setting' />
      </div>
      <div className='savedSpotCard__header'>
        <p className="savedSpotCard__title">{spot.name}</p>
        <p className="savedSpotCard__location">{spot.city}, {spot.province}</p>
      </div>
    </Link>
  );
}