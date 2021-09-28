import { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import OutsideAlerter from '../../../utils/OutsideAlerter';
import tracker from '../../../img/marker.svg';
import './MapMarker.css';
import { MapMarkerProps } from './MapMarker.props';
import circle from '../../../img/circle.png';
import MapLayer from '../MapLayer/MapLayer';

const CIRCLE_RADIUS = 3;
const EARTH_RADIUS = 6378000;

/**
 * Marker that indicates the location of a given item and display its information
 * when clicked.
 */
export default function MapMarker(props: MapMarkerProps) {
  const { item } = props;
  const [showPopup, togglePopup] = useState(false);

  function computeLongitude(dx: number) {
    return (
      item.longitude +
      ((dx / EARTH_RADIUS) * (180 / Math.PI)) /
        Math.cos((item.latitude * Math.PI) / 180)
    );
  }

  function computeLatitude(dy: number) {
    return item.latitude + (dy / EARTH_RADIUS) * (180 / Math.PI);
  }

  function getClassName(condition: boolean) {
    return condition
      ? 'hidden'
      : 'marker-info font-axiforma-light text-blue text-small';
  }

  return (
    <div data-testid="map-marker">
      <Popup
        className={showPopup ? 'popup' : 'hidden'}
        latitude={item.latitude}
        longitude={item.longitude}
        closeButton={false}
        anchor="top"
      >
        <div className={showPopup ? 'popup-animation' : 'hidden'}>
          <div className="font-axiforma-medium text-blue text-medium">
            {item.category} {item.status}
            <br />
            <br />
          </div>
          <div className={getClassName(item.floor == null)}>
            {'Étage: ' + item.floor}
          </div>
          <div className={getClassName(item.service == null)}>
            {'Service: ' + item.service}
          </div>
          <div className={getClassName(item.battery == null)}>
            {'Batterie: ' + item.battery + '%'}
          </div>
          <div className={getClassName(item.temperature == null)}>
            {'Température: ' + item.temperature + '°C'}
          </div>
          <div className={getClassName(item.beacon == null)}>
            {'MAC: ' + item.beacon}
          </div>
        </div>
      </Popup>
      <Marker
        key={item.id}
        longitude={item.longitude}
        latitude={item.latitude}
        offsetLeft={-15}
        offsetTop={-30}
      >
        <OutsideAlerter value={false} setValue={togglePopup} detectDrag={true}>
          <button
            className={showPopup ? 'tracker tracker-animation' : 'tracker'}
            onClick={() => {
              togglePopup(!showPopup);
            }}
          >
            <img src={tracker} alt="Tracker" width={30} />
          </button>
        </OutsideAlerter>
      </Marker>
      <MapLayer
        id={'circle-' + item.id}
        floor={0}
        opacity={1}
        floors={{ 0: circle }}
        coordinates={[
          [computeLongitude(CIRCLE_RADIUS), computeLatitude(CIRCLE_RADIUS)],
          [computeLongitude(CIRCLE_RADIUS), computeLatitude(-CIRCLE_RADIUS)],
          [computeLongitude(-CIRCLE_RADIUS), computeLatitude(-CIRCLE_RADIUS)],
          [computeLongitude(-CIRCLE_RADIUS), computeLatitude(CIRCLE_RADIUS)],
        ]}
      />
    </div>
  );
}
