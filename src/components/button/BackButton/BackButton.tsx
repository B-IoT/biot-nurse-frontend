import React from 'react';
import { Hover, FadeIn, FadeOut, Scale } from '../../../utils/animations';

import './BackButton.css';
import { Link } from 'react-router-dom';
import { SEARCH_PATH } from '../../../App';

/**
 * Button to go back to the search page.
 */
export default function BackButton() {
  return (
    <Link to={SEARCH_PATH}>
      <Hover className="back-button">
        <FadeIn className="back-pressed" />
        <FadeOut className="back-shadow" />
        <FadeOut className="back-light" />
        <Scale className="back-text axiforma-book-normal-blue-30px">
          {'< Retour'}
        </Scale>
      </Hover>
    </Link>
  );
}
