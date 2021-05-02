import './ItemButton';
import './ItemButton.css';
import { Hover, FadeIn, FadeOut, Scale } from '../../../utils/animations';

/**
 * Placeholder button for visualization purposes of the search page.
 */
export default function PlaceholderButton() {
  return (
    <Hover className="item-container">
      <FadeIn className="item-pressed" />
      <FadeOut className="button-container">
        <div className="item-light" />
        <div className="item-shadow" />
      </FadeOut>
      <Scale className="text-container">
        <div className="placeholder-text axiforma-semi-bold-spindle-120px">
          {'...'}
        </div>
      </Scale>
    </Hover>
  );
}
