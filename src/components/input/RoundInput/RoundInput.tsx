import './RoundInput.css';
import roundInput from '../../../img/roundInput.png';
import { useEffect, useState } from 'react';
import OutsideAlerter from '../../../utils/OutsideAlerter';
import { RoundInputProps } from './RoundInput.props';

/**
 * Round input text.
 */
export default function RoundInput(props: RoundInputProps) {
  const { input, setInput } = props;

  function filterInput(inputValue: number) {
    if (inputValue === Infinity) {
      return '';
    }
    return '' + inputValue;
  }

  const [localInput, setLocalInput] = useState(filterInput(input));
  useEffect(() => {
    setLocalInput(filterInput(input));
  }, [input]);

  const parseFloor = () => {
    // Remove every character except digits
    const digits = localInput.replace(/\D/g, '');
    if (digits.length > 0) {
      if (setInput) setInput(parseInt(digits, 10));
      setLocalInput(digits);
    } else {
      setLocalInput(filterInput(input));
    }
  };

  return (
    <div className="round-input">
      <img className="round-input-img" src={roundInput} alt="Round input" />
      <OutsideAlerter
        value={filterInput(input)}
        setValue={setLocalInput}
        detectDrag={false}
      >
        <input
          className="round-input-text font-axiforma-semi-bold text-blue text-medium"
          value={localInput}
          onChange={(e) => setLocalInput(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? parseFloor() : null)}
          data-testid="round-input"
        />
      </OutsideAlerter>
    </div>
  );
}
