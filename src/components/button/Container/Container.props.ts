import { ReactNode } from 'react';

export interface ContainerProps {
  /**
   * The width of the container
   */
  width: number | string;

  /**
   * The height of the container
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
   * The amount of blur applied on the container
   */
  blur: number;

  /**
   * Boolean that toggles the surface gradient
   */
  surfaceGradient: boolean;

  /**
   * The style of the button, used to overwrite or add new css properties
   */
  style: {};

  /**
   * The container's children
   */
  children: ReactNode;
}
