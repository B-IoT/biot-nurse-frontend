import React from 'react';

import './RoundButton.css';
import { Hover, FadeIn, FadeOut, Scale } from '../../../utils/animations';
import { RoundButtonProps } from './RoundButton.props';

/**
 * Round button that displays an icon and executes a given function when clicked.
 */
export default function RoundButton(props: RoundButtonProps) {
  const { iconPath, onClickHandler } = props;

  return (
    <Hover className="round-container">
      <FadeIn className="round-pressed" />
      <button
        className="round-button-container"
        onClick={onClickHandler}
        data-testid="round-button"
      >
        <FadeOut className="round-button-container">
          <div className="round-light" />
          <div className="round-shadow" />
        </FadeOut>
      </button>
      <Scale className="icon-container clear">
        <img className="round-icon" src={iconPath} alt="Button icon" />
      </Scale>
    </Hover>
  );
}
