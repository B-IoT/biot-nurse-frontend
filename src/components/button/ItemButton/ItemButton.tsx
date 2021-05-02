import React from 'react';

import './ItemButton.css';
import { Link } from 'react-router-dom';
import { Hover, FadeIn, FadeOut, Scale } from '../../../utils/animations';
import { getIconPath } from '../../../utils/items';
import { MAP_PATH } from '../../../App';
import { ItemButtonProps } from './ItemButton.props';

/**
 * Button that redirects to the corresponding map page of a given item.
 */
export default function ItemButton(props: ItemButtonProps) {
  const { itemName } = props;

  return (
    <Hover className="item-container" data-testid="item-button">
      <FadeIn className="item-pressed" />
      <Link
        className="button-container"
        to={{ pathname: MAP_PATH, state: { itemName: itemName } }}
        style={{ textDecoration: 'none' }}
      >
        <FadeOut className="button-container">
          <div className="item-light" />
          <div className="item-shadow" />
        </FadeOut>
      </Link>
      <Scale className="text-container clear">
        <img
          className="item-icon"
          src={getIconPath(itemName)}
          alt="Item icon"
        />
        <div className="item-text axiforma-medium-blue-18px"> {itemName} </div>
      </Scale>
    </Hover>
  );
}
