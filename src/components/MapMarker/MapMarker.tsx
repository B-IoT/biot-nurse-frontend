import React from 'react';
import { Marker, Popup } from 'react-map-gl';
import './MapMarker.css';
import tracker from '../../img/marker.svg';
import OutsideAlerter from '../OutsideAlerter';
import { Item } from '../../utils/items';

export default function MapMarker(props: { item: Item }) {
  const [showPopup, togglePopup] = React.useState(false);

  return (
    <div>
      <Popup
        className={showPopup ? 'popup' : 'hidden'}
        latitude={props.item.latitude}
        longitude={props.item.longitude}
        closeButton={false}
        anchor="top"
      >
        <div className="axiforma-medium-blue-22px">
          {props.item.category} {props.item.status}
          <br />
          <br />
        </div>
        <div
          className={
            props.item.floor == null ? 'hidden' : 'axiforma-light-blue-20px'
          }
        >
          {'Étage: ' + props.item.floor}
        </div>
        <div
          className={
            props.item.service == null ? 'hidden' : 'axiforma-light-blue-20px'
          }
        >
          {'Service: ' + props.item.service}
        </div>
        <div
          className={
            props.item.battery == null ? 'hidden' : 'axiforma-light-blue-20px'
          }
        >
          {'Batterie: ' + props.item.battery + '%'}
        </div>
      </Popup>
      <Marker
        key={props.item.id}
        longitude={props.item.longitude}
        latitude={props.item.latitude}
        offsetLeft={-15}
        offsetTop={-30}
      >
        <OutsideAlerter action={() => togglePopup(false)}>
          <button className="tracker" onClick={() => togglePopup(!showPopup)}>
            <img src={tracker} alt="Tracker" width={30} />
          </button>
        </OutsideAlerter>
      </Marker>
    </div>
  );
}
