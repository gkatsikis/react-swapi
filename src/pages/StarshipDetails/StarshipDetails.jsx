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
      
      <h1 className="sub-heading">Starship Details</h1>
      <div className="details">
      {starshipDetails.name ?
      <>
      <h2>Name: {starshipDetails.name}</h2>
      <h2>Model: {starshipDetails.model}</h2>
      <a className="return" href="/">Return to Starship List</a>
      </>
      :
      <>
      <h2>Loading details....</h2>
      </>
    }
    </div>
    </>
   );
}

export default StarshipDetails;