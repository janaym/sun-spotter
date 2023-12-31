import { useState, useEffect } from 'react';

export default function useSpotData(spotID) {

  const [ spotData, setSpotData ] = useState({});
  const [ spotLabels, setSpotLabels ] = useState([]);
  const [ spotRating, setSpotRating ] = useState(0);
  const [ spotVisits, setSpotVisits ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2, res3, res4 ] = await Promise.all([
          fetch(`http://localhost:8080/api/spots/${spotID}`).then(res => res.json()),
          fetch(`http://localhost:8080/api/spots/${spotID}/labels`).then(res => res.json()),
          fetch(`http://localhost:8080/api/spots/${spotID}/rating`).then(res => res.json()),
          fetch(`http://localhost:8080/api/spots/${spotID}/visits`).then(res => res.json())
        ]);

        setSpotData(res1[0]);
        setSpotLabels(res2);
        setSpotRating(res3[0].average_rating);
        setSpotVisits(res4);
      } catch(err) {
        console.error('Error fetching data', err);
      }
    };

    fetchData();
  }, []);

  return [spotData, spotLabels, spotRating, spotVisits];
}
