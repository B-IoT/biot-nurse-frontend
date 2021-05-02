import React from 'react';

export interface RoundButtonProps {
  /**
   * The path of the icon to be displayed
   */
  iconPath: string;

  /**
   * The function executed when the button is clicked
   */
  onClickHandler(event: React.MouseEvent<HTMLElement>): void;
}
