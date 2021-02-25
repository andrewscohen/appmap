import React, { useEffect, useState } from "react";
import LocationComment from "./Comment";


function LocationList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/locations/");
      const responseData = await response.json();
      setLocation(responseData.location);
    }
    fetchData();
  }, []);

  const locationComponents = location.map((location) => {
    return (
      <li key={location.id}>
        {location.street_address}
      </li>
    );
  });

  return (
    <>
      <h1>Location List: </h1>
      <ul>{locationComponents}</ul>
      <LocationComment />
    </>
  );
}

export default LocationList;
