import React from 'react';

import './RoundButton.css';
import { Scale } from '../../../utils/animations';
import { RoundButtonProps } from './RoundButton.props';
import Button from '../Button/Button';

/**
 * Round button that displays an icon and executes a given function when clicked.
 */
export default function RoundButton(props: RoundButtonProps) {
  const { iconPath, onClick } = props;

  return (
    <Button
      data-testid="round-button"
      onClick={onClick}
      width={75}
      height={75}
      borderRadius={75}
      shadowOffset={10}
      surfaceGradient={true}
      style={{ marginBottom: 30 }}
    >
      <Scale className="icon-container clear">
        <img className="round-icon" src={iconPath} alt="Button icon" />
      </Scale>
    </Button>
  );
}
