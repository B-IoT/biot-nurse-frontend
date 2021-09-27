import './Container.css';
import { ContainerProps } from './Container.props';

/**
 * Button that redirects to the corresponding map page of a given item.
 */
export default function Container(props: ContainerProps) {
  const {
    width,
    height,
    borderRadius,
    shadowOffset,
    surfaceGradient,
    style,
    children,
  } = props;

  return (
    <div
      className="neumorphic-container"
      style={Object.assign({}, { width: width, height: height }, style)}
    >
      <div
        className="neumorphic-ambiant"
        style={{ borderRadius: borderRadius }}
      />
      <div
        className="neumorphic-light"
        style={{
          borderRadius: borderRadius,
          boxShadow:
            '' +
            shadowOffset +
            'px ' +
            shadowOffset +
            'px calc(1.5*' +
            shadowOffset +
            'px) var(--darker-shadow)',
        }}
      />
      <div
        className="neumorphic-shadow"
        style={{
          borderRadius: borderRadius,
          boxShadow:
            '-' +
            shadowOffset +
            'px -' +
            shadowOffset +
            'px calc(1.5*' +
            shadowOffset +
            'px) var(--lighter-light)',
          background: surfaceGradient
            ? 'linear-gradient(157.37deg, var(--light) 13.29%, var(--shadow) 84.76%)'
            : 'none',
        }}
      />
      {children}
    </div>
  );
}
