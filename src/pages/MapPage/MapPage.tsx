import './MapPage.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import ItemMap from '../../components/map/ItemMap/ItemMap';
import { MapPageProps } from './MapPage.props';
import Button from '../../components/button/Button/Button';
import { SEARCH_PATH } from '../../App';
import { Link } from 'react-router-dom';
import React from 'react';
import { Scale } from '../../utils/animations';
import Container from '../../components/button/Container/Container';

/**
 * The page displaying the location of the items corresponding to the given category.
 */
export default function MapPage(props: MapPageProps) {
  const { location } = props;

  return (
    <div className="map-page">
      <div className="top-container">
        <Container
          width={'100%'}
          height={200}
          borderRadius={0}
          shadowOffset={10}
          surfaceGradient={false}
          style={{}}
        >
          <div className="back-button">
            <Link to={SEARCH_PATH} style={{ textDecoration: 'none' }}>
              <Button
                onClick={() => null}
                width={180}
                height={75}
                borderRadius={75}
                shadowOffset={10}
                surfaceGradient={true}
                style={{}}
              >
                <Scale className="back-text axiforma-book-normal-blue-30px">
                  {'< Retour'}
                </Scale>
              </Button>
            </Link>
          </div>

          <h1 className="map-title axiforma-semi-bold-blue-50px">
            {'Voici les ' + location.state.category.name + 's à proximité'}
          </h1>
        </Container>
      </div>
      <div className="item-map-container">
        <ItemMap category={location.state.category} />
      </div>
    </div>
  );
}
