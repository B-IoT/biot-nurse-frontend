import React from 'react';
import { Layer, Source } from 'react-map-gl';
import { MapLayerProps } from './MapLayer.props';

/**
 * Layer that displays the correct map according to the selected floor
 */
export default function MapLayer(props: MapLayerProps) {
  const { id, floor, floors, coordinates, opacity } = props;
  const url = floors[floor];

  if (url) {
    return (
      <div>
        <Source
          id={id + '-source'}
          type="image"
          url={url}
          coordinates={coordinates}
        />
        <Layer
          id={id + '-layer'}
          source={id + '-source'}
          type="raster"
          paint={{ 'raster-opacity': opacity }}
        />
      </div>
    );
  }

  return null;
}
