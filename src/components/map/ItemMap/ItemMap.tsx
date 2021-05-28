import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { FlyToInterpolator } from 'react-map-gl';

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
import epfl0 from '../../../img/EPFL0.png';
import epfl1 from '../../../img/EPFL1.png';
import epfl2 from '../../../img/EPFL2.png';

import mapboxgl from 'mapbox-gl';
import MapLayer from '../MapLayer/MapLayer'; // @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!../../../../node_modules/mapbox-gl/dist/mapbox-gl-csp-worker').default;

const flyToOperator = new FlyToInterpolator({ speed: 6 });

/**
 * Map component displaying the location of the items corresponding to the given category.
 */
export default function ItemMap(props: ItemMapProps) {
  const { itemName } = props;
  const [userLon, setUserLon] = useState(0);
  const [userLat, setUserLat] = useState(0);
  const [floor, setFloor] = useState(Infinity);
  const [itemsFetched, setItemsFetched] = useState(false);
  const [userFetched, setUserFetched] = useState(false);
  const [items, setItems] = useState([] as Item[]);
  const [viewport, setViewport] = useState({
    latitude: 46.440896,
    longitude: 6.891924,
    zoom: 19,
    maxZoom: 22,
    minZoom: 15,
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
          setFloor(
            Math.min.apply(
              null,
              filterItems.map((item: Item) => item.floor)
            )
          );

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
              <MapLayer
                id="source"
                floor={floor}
                opacity={1}
                floors={{ 1: laSource1, 2: laSource2 }}
                coordinates={[
                  [6.6221621976, 46.5298994022],
                  [6.623383043, 46.5294103301],
                  [6.6229855116, 46.5289365281],
                  [6.6217625055, 46.5294240453],
                ]}
              />
              <MapLayer
                id="forge"
                floor={floor}
                opacity={1}
                floors={{ 0: laForge0, 1: laForge1 }}
                coordinates={[
                  [6.562626893173264, 46.517607277539106],
                  [6.562863671772686, 46.517609132035275],
                  [6.562870180322819, 46.51710903432505],
                  [6.562632991299888, 46.51710791825781],
                ]}
              />
              <MapLayer
                id="epfl"
                floor={floor}
                opacity={1}
                floors={{ 0: epfl0, 1: epfl1, 2: epfl2 }}
                coordinates={[
                  [6.568616030085856, 46.52101710040429],
                  [6.571625357306832, 46.521041126066834],
                  [6.571643373393564, 46.51999620572547],
                  [6.568631644262474, 46.51997530035722],
                ]}
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
