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

  const [localInput, setLocalInput] = useState('' + input);
  useEffect(() => {
    setLocalInput('' + input);
  }, [input]);

  const parseFloor = () => {
    // Remove every character except digits
    const digits = localInput.replace(/\D/g, '');
    if (digits.length > 0) {
      setInput(parseInt(digits, 10));
      setLocalInput(digits);
    } else {
      setLocalInput('' + input);
    }
  };

  return (
    <div className="round-input">
      <img className="round-input-img" src={roundInput} alt="Round input" />
      <OutsideAlerter value={input} setValue={setLocalInput} detectDrag={false}>
        <input
          className="round-input-text axiforma-book-normal-blue-30px"
          value={localInput}
          onChange={(e) => setLocalInput(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? parseFloor() : null)}
        />
      </OutsideAlerter>
    </div>
  );
}
