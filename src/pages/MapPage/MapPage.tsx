import React from 'react';
import './MapPage.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import BackButton from '../../components/button/BackButton/BackButton';
import ItemMap from '../../components/map/ItemMap/ItemMap';

function MapPage(props: { location: { state: { itemName: string } } }) {
  return (
    <div className="map-page">
      <div className="top-container">
        <BackButton />
        <h1 className="map-title axiforma-semi-bold-blue-50px">
          {'Voici les ' + props.location.state.itemName + 's à proximité'}
        </h1>
      </div>
      <ItemMap itemName={props.location.state.itemName} />
    </div>
  );
}

export default MapPage;
