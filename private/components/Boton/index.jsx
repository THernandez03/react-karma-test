import React, { PropTypes } from 'react';
import './styles.css';

/**
 * Boton Component
 * @returns {object} Boton
 */
const Boton = ({
  className,
  style,
  onHover,
  onClick,
  text,
  href,
  src,
  icon,
}) => {
  let contentBoton = text;
  if(src){
    contentBoton = <img src={src}/>;
  }else if(text !== 'Boton' || icon){
    contentBoton = (
      <div>
        <i key='icon' className={icon}/>
        <span>{text}</span>
      </div>
    );
  }
  return (
    <div className='buttonWrapper'>
      <button
        className={className}
        onMouseOver={onHover}
        onClick={onClick}
        style={style}
        href={href}
      >
        {contentBoton}
      </button>
    </div>
  )
}

Boton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  text: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  icon: PropTypes.string,
};

Boton.defaultProps = {
  className: 'button',
  style: {},
  onHover(){},
  onClick(){},
  text: 'Boton',
  href: '',
  src: '',
  icon: '',
};

export default Boton;
