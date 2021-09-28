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
      onClick={onClick}
      width={60}
      height={60}
      borderRadius={60}
      blur={2}
      shadowOffset={5}
      surfaceGradient={true}
      style={{ marginBottom: 30 }}
    >
      <Scale className="icon-container clear">
        <img className="round-icon" src={iconPath} alt="Button icon" />
      </Scale>
    </Button>
  );
}
