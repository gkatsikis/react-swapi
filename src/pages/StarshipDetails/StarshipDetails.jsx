import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState([])
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  }, [])


  return ( 
    <>
      <h1>Starship Details</h1>
      <h2>{starshipDetails.name}</h2>
    </>
   );
}
 
export default StarshipDetails;