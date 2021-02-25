import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import LocationComment from "./Comment";


function LocationView() {
  const [location, setLocation] = useState([]);
  const {locationId} = useParams()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/locations/${locationId}`);
      const responseData = await response.json();
      setLocation(responseData);
    }
    fetchData();
  }, [locationId]);

  const comments = location.comments;

  console.log('COMMENTS: ', comments)

  return (
    <>
        <h1>Title: {location.title !== '' ? location.title : "Untitled"}</h1>
        <h1>Artist: {location.artist !== '' ? location.title : "Unknown"}</h1>
        <h1>Address: </h1>
          <ul>
            <li>{location.street_address}</li>
            <li>{location.city}</li>
            <li>{location.state}</li>
            <li>{location.zip_code}</li>
          </ul>
        <h3>Description: {location.description}</h3>
        {location.comments.length && <p>location.comments</p>}
    </>
  );
}

export default LocationView;

 {/* {console.log("THIS IS THE LOCATION! :", location)}
      <h1>Location View: </h1>
      {/* <ul>{locationComponents}</ul> */}
    // <LocationComment /> */}
