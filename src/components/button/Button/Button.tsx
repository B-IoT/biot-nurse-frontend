import React from 'react';
import { Hover, FadeIn, FadeOut } from '../../../utils/animations';

import './Button.css';
import { ButtonProps } from './Button.props';
import Container from '../Container/Container';

/**
 * Customizable button that executes a given function when clicked.
 */
export default function Button(props: ButtonProps) {
  const { onClick, width, height, borderRadius, style, children } = props;

  return (
    <Hover
      className="button"
      style={Object.assign({}, { width: width, height: height }, style)}
      onClick={onClick}
    >
      <FadeIn
        className="button-pressed"
        style={{ width: width, height: height, borderRadius: borderRadius }}
      />
      <FadeOut className="button-unpressed">
        <Container
          width={width}
          height={height}
          style={{}}
          borderRadius={borderRadius}
          children={children}
        />
      </FadeOut>
      {children}
    </Hover>
  );
}
