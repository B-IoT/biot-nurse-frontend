import { Dispatch, SetStateAction } from 'react';

export interface RoundInputProps {
  /**
   * The value of the linked input
   */
  input: number;

  /**
   * The setter to update the linked input
   */
  setInput: Dispatch<SetStateAction<number>> | null;
}
