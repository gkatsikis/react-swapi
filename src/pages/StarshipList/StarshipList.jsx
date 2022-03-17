import { getAllStarships } from '../../services/sw-api';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarshipList(starshipData.results))
  }, [])

  return ( 
    <>
    {starshipList.length ? 
    <>
      <h2>List of Starships</h2>
      {starshipList.map((starship) => (
        <Link
        to="/starship"
        state={{ starship }}
        >
        <div key={starship.index}>
          {starship['name']}
        </div>
        </Link>
      ))}
    </>
    :
      <>
        <h2>Loading the ships...vroooom</h2>
      </>}
      </>
  );
}
 
export default StarshipList;