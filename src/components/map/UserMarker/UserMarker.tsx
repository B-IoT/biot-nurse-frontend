import { Marker } from 'react-map-gl';
import './UserMarker.css';
import { useEffect } from 'react';
import { UserMarkerProps } from './UserMarker.props';

/**
 * Marker that indicates the location of the user.
 */
export default function UserMarker(props: UserMarkerProps) {
  const { userLon, userLat, setUserLon, setUserLat, setUserFetched } = props;

  useEffect(() => {
    if (navigator.geolocation) {
      setInterval(
        () =>
          navigator.geolocation.getCurrentPosition(
            function (position) {
              setUserLon(position.coords.longitude);
              setUserLat(position.coords.latitude);
              setUserFetched(true);
            },
            (e) => console.log(e),
            { enableHighAccuracy: false, timeout: 2000, maximumAge: 2000 }
          ),
        2000
      );
    }
  }, [setUserFetched, setUserLat, setUserLon]);

  return (
    <Marker longitude={userLon} latitude={userLat}>
      <div className="user-container" />
      <div className="user-animation" />
      <div className="user-marker" />
    </Marker>
  );
}
