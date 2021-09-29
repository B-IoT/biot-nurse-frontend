import './MapPage.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import ItemMap from '../../components/map/ItemMap/ItemMap';
import { MapPageProps } from './MapPage.props';
import Button from '../../components/button/Button/Button';
import { SEARCH_PATH } from '../../App';
import { Link } from 'react-router-dom';
import React from 'react';
import { Scale } from '../../utils/animations';
import { getIconPath } from '../../utils/items';

/**
 * The page displaying the location of the items corresponding to the given category.
 */
export default function MapPage(props: MapPageProps) {
  const { location } = props;

  return (
    <div className="map-page">
      <div className="item-map-container">
        <ItemMap category={location.state.category} />
      </div>

      <div className="top-container">
        <div className="top-container-blur">
          <div className="top-container-shadow" />
          <div className="top-container-ambient" />
        </div>
        <div className="back-button">
          <Link to={SEARCH_PATH} style={{ textDecoration: 'none' }}>
            <Button
              onClick={() => null}
              width={120}
              height={60}
              borderRadius={50}
              blur={2}
              shadowOffset={7}
              surfaceGradient={true}
              style={{}}
            >
              <Scale className="back-text font-axiforma-book text-blue text-medium">
                {'< Retour'}
              </Scale>
            </Button>
          </Link>
        </div>

        <img
          className="map-title-icon"
          src={getIconPath(location.state.category.name)}
          alt="Item icon"
        />
        <h1 className="font-axiforma-semi-bold text-blue text-title">
          {location.state.category.name}
        </h1>
      </div>
    </div>
  );
}
