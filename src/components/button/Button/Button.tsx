import React from 'react';
import { Hover, FadeIn, FadeOut } from '../../../utils/animations';

import './Button.css';
import { ButtonProps } from './Button.props';
import Container from '../Container/Container';

/**
 * Customizable button that executes a given function when clicked.
 */
export default function Button(props: ButtonProps) {
  const {
    onClick,
    width,
    height,
    borderRadius,
    shadowOffset,
    blur,
    surfaceGradient,
    style,
    children,
  } = props;

  function parseLength(length: number | string) {
    return length !== undefined && length.constructor === String
      ? length
      : '' + length + 'px';
  }

  const stringWidth = parseLength(width);
  const stringHeight = parseLength(height);

  return (
    <Hover
      className="button"
      data-testid="button"
      style={Object.assign({}, { width: width, height: height }, style)}
      onClick={onClick}
    >
      <FadeIn
        className="button-pressed"
        style={{
          width: 'calc(' + stringWidth + ' + 0.5*' + shadowOffset + 'px)',
          height: 'calc(' + stringHeight + ' + 0.5*' + shadowOffset + 'px)',
          borderRadius: borderRadius,
          filter: 'blur(' + 2 * blur + 'px)',
        }}
      />
      <FadeOut className="button-unpressed">
        <Container
          width={width}
          height={height}
          style={{}}
          borderRadius={borderRadius}
          blur={blur}
          shadowOffset={shadowOffset}
          surfaceGradient={surfaceGradient}
          children={children}
        />
      </FadeOut>
      {children}
    </Hover>
  );
}
