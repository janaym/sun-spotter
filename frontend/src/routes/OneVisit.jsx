import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/OneVisit.scss';
import useVisitData from '../hooks/useVisitData';

export default function OneVisit() {

  const visitId = useParams().id;
  const [visit] = useVisitData(visitId);

  //how many stars to display
  const starNumber = Math.floor(Number(visit.rating));
  const needsPartialStar = starNumber - Number(visit.rating) !== 0;

  return (
    <div className='one-visit__container'>
      <div className='one-visit__details--container'>
        <div className='one-visit__header--container'>

          <div className='one-visit__header--profile'>
            <div className='one-visit__header--image'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="#757575" className="bi " viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </div>

            <div>
              <h2>{visit.first_name} {visit.last_name}</h2>
              {/* <p>{visit.time_stamp}</p> */}
              <p>Victoria, BC</p>
            </div>
          </div>

          <hr className='one-visit--line'/>

          <div className='one-visit__visit-details--container'>
            <div className='one-visit--visit-header'>
              <h1>Willows Beach</h1>
            { visit.rating > 0 &&
              <div className='one-visit--rating'>
                <div className='one-visit--stars'>
                {/* display all whole stars */}
                {[...Array(starNumber)].map(() => (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill about-spot__star" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}
                {/* display partial star if needed */}
                {needsPartialStar &&
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-half about-spot__star" viewBox="0 0 16 16">
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                  </svg>
                }
                </div>
              </div>
            }
            </div>
            <h4>{visit.description}</h4>
            <p>2 weeks ago</p>
          </div>
        </div>
        <div className='one-visit__comments--container'>

        </div>

      </div>
      
      <div className='one-visit__image--container'>
        <img src={`http://localhost:8080/${visit.image_url}`} />
      </div>

    </div>
  );
}
