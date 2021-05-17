import React, { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import OutsideAlerter from '../../../utils/OutsideAlerter';
import tracker from '../../../img/marker.svg';
import './MapMarker.css';
import { MapMarkerProps } from './MapMarker.props';

/**
 * Marker that indicates the location of a given item and display its information
 * when clicked.
 */
export default function MapMarker(props: MapMarkerProps) {
  const { item } = props;
  const [showPopup, togglePopup] = useState(false);

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
          <div className="axiforma-medium-blue-22px">
            {item.category} {item.status}
            <br />
            <br />
          </div>
          <div
            className={
              item.floor == null ? 'hidden' : 'axiforma-light-blue-20px'
            }
          >
            {'Étage: ' + item.floor}
          </div>
          <div
            className={
              item.service == null ? 'hidden' : 'axiforma-light-blue-20px'
            }
          >
            {'Service: ' + item.service}
          </div>
          <div
            className={
              item.battery == null ? 'hidden' : 'axiforma-light-blue-20px'
            }
          >
            {'Batterie: ' + item.battery + '%'}
          </div>
          <div
            className={
              item.temperature == null ? 'hidden' : 'axiforma-light-blue-20px'
            }
          >
            {'Température: ' + item.temperature + '°C'}
          </div>
          <div
            className={
              item.beacon == null ? 'hidden' : 'axiforma-light-blue-20px'
            }
          >
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
    </div>
  );
}
