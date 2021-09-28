import './Input.css';
import { InputProps } from './Input.props';

/**
 * Customizable input text.
 */
export default function Input(props: InputProps) {
  const {
    setKeyword,
    defaultText,
    width,
    style,
    enterHandler,
    isPassword,
  } = props;

  return (
    <div
      className="search-bar"
      style={Object.assign({}, { width: width }, style)}
    >
      <div className="search-mask" style={{ width: width }}>
        <div className="search-shadow" style={{ width: width + 50 }} />
        <div className="search-light" style={{ width: width + 50 }} />
      </div>
      <div className="search-blur" style={{ width: width + 10 }}>
        <input
          type={isPassword ? 'password' : ''}
          className="search-text font-axiforma-light text-blue text-small"
          placeholder={defaultText}
          onChange={(e) => {
            if (setKeyword) {
              return setKeyword(e.target.value);
            }
          }}
          onKeyPress={(e) => (e.key === 'Enter' ? enterHandler() : null)}
          style={{ width: width - 50 }}
          data-testid="input"
        />
      </div>
    </div>
  );
}
