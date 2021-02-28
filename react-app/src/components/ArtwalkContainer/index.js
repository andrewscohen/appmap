import Directions from '../RouteMap'
import mapStyle from "../Maps/mapStyle";
import "./ArtwalkContainer.css"

export default function ArtwalkContainer({artwalk}) {
  const locationsArray = Object.values(artwalk.locations)
  // const coordinatesObj = locationsArray.map(location => {
  //   return {lat: location.lat, lng: location.long}
  // })


  const mapContainerStyle = {
    height: "200px",
    width: "350px",
    borderRadius: "5px 0 0 5px",
    zoomControl: false,
  }

  const options = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: false,
    gestureHandling: "none"
  };

  if (locationsArray.length) {
    return (
    <div className="artwalk-container">
       {/* <img
          src={`https://maps.googleapis.com/maps/api/staticmap?size=350x200&maptype=roadmap&markers=color:0xFE3A9E%7C${coordinateString}&path=${pathenc}&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`}
          alt="map"
        /> */}
      <Directions className="map" locationsArray={locationsArray} mapContainerStyle={mapContainerStyle} options={options}/>
      <div className="artwalk-container__info">
        <h2>{artwalk.name}</h2>
        <h3>{locationsArray[0].city}, {locationsArray[0].state}</h3>
      </div>
    </div>
  )
}
}
