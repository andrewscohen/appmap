import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import LocationComment from "./Comment";


function LocationView() {
  const [location, setLocation] = useState([]);
  const {locationId} = useParams()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/locations/${locationId}`);
      console.log("Response: ", response);
      const responseData = await response.json();
      console.log('RESPONSE DATA: ', responseData)
      setLocation(responseData);
    }
    fetchData();
  }, [locationId]);

//   const locationComponents = location.map((location) => {
//     return (
//       <li key={location.id}>
//         {location.street_address}
//       </li>
//     );
//   });

  return (
    <>
    {location && location.comments.map((comment) => (
        <p>{comment.comment}</p>
    )) }
    </>
  );
}

export default LocationView;

 {/* {console.log("THIS IS THE LOCATION! :", location)}
      <h1>Location View: </h1>
      {/* <ul>{locationComponents}</ul> */}
    // <LocationComment /> */}
