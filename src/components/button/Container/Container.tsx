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
      className='neumorphic-container'
      style={Object.assign({}, { width: width, height: height }, style)}
    >
      <div
        className='neumorphic-div'
        style={{
          height: 'calc(100% + ' + shadowOffset + 'px)',
          width: 'calc(100% + ' + shadowOffset + 'px)',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: borderRadius,
          background: 'var(--darker-shadow)',
          filter: 'blur(' + blur + 'px)',
        }}
      />
      <div
        className='neumorphic-div'
        style={{
          height: 'calc(100% + ' + shadowOffset + 'px)',
          width: 'calc(100% + ' + shadowOffset + 'px)',
          position: 'absolute',
          bottom: 0,
          right: 0,
          borderRadius: borderRadius,
          background: 'var(--lighter-light)',
          filter: 'blur(' + blur + 'px)',
        }}
      />
      <div
        className='neumorphic-div neumorphic-ambiant'
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          borderRadius: borderRadius,
          background: surfaceGradient
            ? 'linear-gradient(157.37deg, var(--light) 13.29%, var(--shadow) 84.76%)'
            : 'var(--background)',
          filter: 'blur(' + blur + 'px)',
        }}
      />
      {children}
    </div>
  );
}
