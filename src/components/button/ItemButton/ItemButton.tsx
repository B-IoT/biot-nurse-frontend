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
  const { category } = props;

  return (
    <Hover className="item-container" data-testid="item-button">
      <FadeIn className="item-pressed" />
      <Link
        className="button-container"
        to={{ pathname: MAP_PATH, state: { category } }}
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
          src={getIconPath(category.name)}
          alt="Item icon"
        />
        <div className="item-text axiforma-medium-blue-18px">
          {' '}
          {category.name}{' '}
        </div>
      </Scale>
    </Hover>
  );
}
