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
    blur,
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
        className="neumorphic-div neumorphic-ambiant"
        style={{ borderRadius: borderRadius, filter: 'blur(' + blur + 'px)' }}
      />
      <div
        className="neumorphic-div"
        style={{
          borderRadius: borderRadius,
          boxShadow:
            '' +
            shadowOffset +
            'px ' +
            shadowOffset +
            'px ' +
            shadowOffset +
            'px ' +
            'var(--darker-shadow)',
          filter: 'blur(' + blur + 'px)',
        }}
      />
      <div
        className="neumorphic-div"
        style={{
          borderRadius: borderRadius,
          boxShadow:
            '-' +
            shadowOffset +
            'px ' +
            '-' +
            shadowOffset +
            'px ' +
            shadowOffset +
            'px ' +
            'var(--lighter-light)',
          background: surfaceGradient
            ? 'linear-gradient(157.37deg, var(--light) 13.29%, var(--shadow) 84.76%)'
            : 'none',
          filter: 'blur(' + blur + 'px)',
        }}
      />
      {children}
    </div>
  );
}
