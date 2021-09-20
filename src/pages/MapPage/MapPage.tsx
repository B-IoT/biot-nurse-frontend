import './MapPage.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import BackButton from '../../components/button/BackButton/BackButton';
import ItemMap from '../../components/map/ItemMap/ItemMap';
import { MapPageProps } from './MapPage.props';
import { translate } from '../../i18n';

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
          {translate('hereAreClosest', {
            category: location.state.category.name,
          })}
        </h1>
      </div>
      <ItemMap category={location.state.category} />
    </div>
  );
}
