import { ReactNode } from 'react';

export interface ButtonProps {
  /**
   * The function executed when the button is clicked
   */
  onClick: () => void;

  /**
   * The width of the button
   */
  width: number | string;

  /**
   * The height of the button
   */
  height: number | string;

  /**
   * The radius of the rounded corners
   */
  borderRadius: number | string;

  /**
   * The offset of the neumorphic shadow
   */
  shadowOffset: number;

  /**
   * Boolean that toggles the surface gradient
   */
  surfaceGradient: boolean;

  /**
   * The style of the button, used to overwrite or add new css properties
   */
  style: {};

  /**
   * The button's children
   */
  children: ReactNode;
}
