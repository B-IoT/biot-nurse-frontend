import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { FlyToInterpolator, Layer, Source } from 'react-map-gl';

import { getItemsByCategory, REFETCH_INTERVAL } from '../../../api/api';
import { getPrettyItems, Item } from '../../../utils/items';
import MapMarker from '../MapMarker/MapMarker';
import RoundButton from '../../button/RoundButton/RoundButton';
import RoundInput from '../../input/RoundInput/RoundInput';
import UserMarker from '../UserMarker/UserMarker';
import { ItemMapProps } from './ItemMap.props';
import './ItemMap.css';

import laSource1 from '../../../img/laSource1.png';
import laSource2 from '../../../img/laSource2.png';
import laForge0 from '../../../img/laForge0.png';
import laForge1 from '../../../img/laForge1.png';

import mapboxgl from 'mapbox-gl'; // @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!../../../node_modules/mapbox-gl/dist/mapbox-gl-csp-worker').default;

const flyToOperator = new FlyToInterpolator({ speed: 6 });

/**
 * Map component displaying the location of the items corresponding to the given category.
 */
export default function ItemMap(props: ItemMapProps) {
  const { itemName } = props;
  const [userLon, setUserLon] = useState(0);
  const [userLat, setUserLat] = useState(0);
  const [floor, setFloor] = useState(0);
  const [itemsFetched, setItemsFetched] = useState(false);
  const [userFetched, setUserFetched] = useState(false);
  const [items, setItems] = useState([] as Item[]);
  const [viewport, setViewport] = useState({
    latitude: 46.440896,
    longitude: 6.891924,
    zoom: 19,
    maxZoom: 22,
    minZoom: 17,
    mapStyle: 'mapbox://styles/ludohoffstetter/cklfuba923yaa17miwvtmd26g',
  } as any);

  function centerHandler() {
    if (userFetched) {
      let newViewport = { ...viewport };
      newViewport.latitude = userLat;
      newViewport.longitude = userLon;
      newViewport.transitionDuration = 'auto';
      newViewport.transitionInterpolator = flyToOperator;
      setViewport(newViewport);
    }
  }

  function zoomHandler() {
    let newViewport = { ...viewport };
    newViewport.zoom = Math.min(newViewport.zoom + 1, newViewport.maxZoom);
    newViewport.transitionDuration = 'auto';
    newViewport.transitionInterpolator = flyToOperator;
    setViewport(newViewport);
  }

  function dezoomHandler() {
    let newViewport = { ...viewport };
    newViewport.zoom = Math.max(newViewport.zoom - 1, newViewport.minZoom);
    newViewport.transitionDuration = 'auto';
    newViewport.transitionInterpolator = flyToOperator;
    setViewport(newViewport);
  }

  // if (!itemsFetched) {
  //   setItemsFetched(true);
  //   const filterItems = itemExamples.filter((item: any) =>
  //         item.longitude != null &&
  //         item.latitude != null &&
  //         item.longitude !== 'NaN' &&
  //         item.latitude !== 'NaN' &&
  //         item.category === itemName);
  //   setItems(filterItems);
  //   const latitude =
  //     filterItems
  //       .map((item: Item) => item.latitude)
  //       .reduce((acc: number, lat: number) => acc + lat) / filterItems.length;
  //   const longitude =
  //     filterItems
  //       .map((item: Item) => item.longitude)
  //       .reduce((acc: number, lon: number) => acc + lon) / filterItems.length;
  //
  //   let newViewport = { ...viewport };
  //   newViewport.latitude = latitude;
  //   newViewport.longitude = longitude;
  //   setViewport(newViewport);
  // }

  const { data } = useQuery('items', () => getItemsByCategory(itemName), {
    refetchInterval: REFETCH_INTERVAL,
  });

  useEffect(() => {
    if (data !== undefined) {
      const filterItems = data.filter(
        (item: Item) =>
          !isNaN(item.longitude) &&
          !isNaN(item.latitude) &&
          item.longitude != null &&
          item.latitude != null &&
          item.category === itemName
      );

      if (filterItems.length > 0) {
        setItems(getPrettyItems(filterItems));

        if (!itemsFetched) {
          const latitude =
            filterItems
              .map((item: Item) => item.latitude)
              .reduce((acc: number, lat: number) => acc + lat) /
            filterItems.length;
          const longitude =
            filterItems
              .map((item: Item) => item.longitude)
              .reduce((acc: number, lon: number) => acc + lon) /
            filterItems.length;

          let newViewport = { ...viewport };
          newViewport.latitude = latitude;
          newViewport.longitude = longitude;
          setViewport(newViewport);

          setFloor(
            Math.min.apply(
              null,
              filterItems.map((item: Item) => item.floor)
            )
          );
        }

        setItemsFetched(true);
      }
    }
  }, [data]);

  const markers = useMemo(
    () =>
      items
        .filter((item) => item.floor === floor)
        .map((item) => <MapMarker key={item.id} item={item} />),
    [items, floor]
  );

  return (
    <div className="map-total-container">
      <div className="map-control-left">
        <RoundButton
          iconPath={'navbarIcons/floorUp.svg'}
          onClickHandler={() => setFloor(floor + 1)}
        />
        <RoundInput input={floor} setInput={setFloor} />
        <RoundButton
          iconPath={'navbarIcons/floorDown.svg'}
          onClickHandler={() => setFloor(floor - 1)}
        />
      </div>

      <div className="map-container">
        <div className="map-mask">
          <div
            className={itemsFetched ? 'map' : 'hidden'}
            data-testid={itemsFetched ? 'map' : 'hidden'}
          >
            <ReactMapGl
              {...viewport}
              width="90vw"
              height="100vh"
              onViewportChange={setViewport}
              mapStyle={
                'mapbox://styles/ludohoffstetter/cklfuba923yaa17miwvtmd26g'
              }
            >
              <Source
                id="map-source"
                type="image"
                url={floor < 2 ? laSource1 : laSource2}
                coordinates={[
                  [6.6221621976, 46.5298994022],
                  [6.623383043, 46.5294103301],
                  [6.6229855116, 46.5289365281],
                  [6.6217625055, 46.5294240453],
                ]}
              />
              <Source
                id="map-forge"
                type="image"
                url={floor < 1 ? laForge0 : laForge1}
                coordinates={[
                  [6.562626893173264, 46.517607277539106],
                  [6.562863671772686, 46.517609132035275],
                  [6.562870180322819, 46.51710903432505],
                  [6.562632991299888, 46.51710791825781],
                ]}
              />
              <Layer
                id="overlay1"
                source="map-forge"
                type="raster"
                paint={{ 'raster-opacity': 1 }}
              />
              <Layer
                id="overlay2"
                source="map-source"
                type="raster"
                paint={{ 'raster-opacity': 1 }}
              />
              {markers}
              <UserMarker
                userLon={userLon}
                userLat={userLat}
                setUserLon={setUserLon}
                setUserLat={setUserLat}
                setUserFetched={setUserFetched}
              />
            </ReactMapGl>
          </div>
          <div className="mask-edges clear" />
          <div className="blurred-edges clear" />
        </div>
        <div className="map-blur clear">
          <div className="map-mask clear">
            <div className="map-ambient clear" />
            <div className="map-shadow clear" />
            <div className="map-light clear" />
          </div>
        </div>
      </div>

      <div className="map-control-right">
        {userFetched && (
          <RoundButton
            iconPath={'navbarIcons/center.svg'}
            onClickHandler={centerHandler}
          />
        )}
        {userFetched && <div className="separator" />}
        <RoundButton
          iconPath={'navbarIcons/zoom.svg'}
          onClickHandler={zoomHandler}
        />
        <RoundButton
          iconPath={'navbarIcons/dezoom.svg'}
          onClickHandler={dezoomHandler}
        />
      </div>
    </div>
  );
}
