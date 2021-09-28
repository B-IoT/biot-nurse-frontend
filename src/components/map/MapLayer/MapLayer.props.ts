export interface MapLayerProps {
  /**
   * The id of the layer
   */
  id: string;

  /**
   * The selected floor
   */
  floor: number;

  /**
   * The dictionary containing the floors with their associated image url
   */
  floors: { [floor: number]: string };

  /**
   * The GPS coordinates of the map's 4 corners
   */
  coordinates: number[][];

  /**
   * The opacity of the map
   */
  opacity: number;
}
