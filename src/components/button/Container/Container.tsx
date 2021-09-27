import './Container.css';
import { ContainerProps } from './Container.props';

/**
 * Button that redirects to the corresponding map page of a given item.
 */
export default function Container(props: ContainerProps) {
  const { width, height, borderRadius, style, children } = props;

  let newWidth = width;
  if (width.constructor !== String) {
    newWidth = '' + width + 'px';
  }

  return (
    <div
      className="neumorphic-container"
      style={Object.assign({}, { width: width, height: height }, style)}
    >
      <div
        className="neumorphic-light"
        style={{
          borderRadius: borderRadius,
          boxShadow:
            'calc(0.1*' +
            newWidth +
            ') calc(0.1*' +
            newWidth +
            ') calc(0.15*' +
            newWidth +
            ') var(--darker-shadow)',
        }}
      />
      <div
        className="neumorphic-shadow"
        style={{
          borderRadius: borderRadius,
          boxShadow:
            'calc(-0.1*' +
            newWidth +
            ') calc(-0.1*' +
            newWidth +
            ') calc(0.15*' +
            newWidth +
            ') var(--lighter-light)',
        }}
      />
      {children}
    </div>
  );
}
