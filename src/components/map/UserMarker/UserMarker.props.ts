import { Dispatch, SetStateAction } from 'react';

export interface UserMarkerProps {
  /**
   * The longitude of the user
   */
  userLon: number;

  /**
   * The latitude of the user
   */
  userLat: number;

  /**
   * The longitude setter to notify the component caller
   */
  setUserLon: Dispatch<SetStateAction<number>>;

  /**
   * The latitude setter to notify the component caller
   */
  setUserLat: Dispatch<SetStateAction<number>>;

  /**
   * The boolean setter to notify the component caller that the user location
   * is available
   */
  setUserFetched: Dispatch<SetStateAction<boolean>>;
}