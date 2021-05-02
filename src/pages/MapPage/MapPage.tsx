import React from 'react';
import './MapPage.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import BackButton from '../../components/button/BackButton/BackButton';
import ItemMap from '../../components/map/ItemMap/ItemMap';
import { MapPageProps } from './MapPage.props';

/**
 * The page displaying the location of the items corresponding to the given category.
 */
export default function MapPage(props: MapPageProps) {
  const { location } = props;

  return (
    <div className="map-page">
      <div className="top-container">
        <BackButton />
        <h1 className="map-title axiforma-semi-bold-blue-50px">
          {'Voici les ' + location.state.itemName + 's à proximité'}
        </h1>
      </div>
      <ItemMap itemName={location.state.itemName} />
    </div>
  );
}
