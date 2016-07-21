import React, { PropTypes } from 'react';
import './styles.css';

/**
 * Boton Component
 * @returns {object} Boton
 */
const Boton = ({
  hrefNewTab,
  style,
  onHover,
  onClick,
  text,
  href,
  src,
  icon,
}) => {
  const handleHref = (event) => {
    if(hrefNewTab){
      const win = window.open(href, '_blank');
      win.focus();
    }else{
      window.location = href;
    }
    onClick(event);
  }
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
    <div className='contenedorBoton' style={style.contenedorBoton}>
      <button
        className='estiloBoton'
        onMouseOver={onHover}
        onClick={(href) ? handleHref : onClick}
        style={style.estiloBoton}
        href={href}
      >
        {contentBoton}
      </button>
    </div>
  )
}

Boton.propTypes = {
  hrefNewTab: PropTypes.bool,
  style: PropTypes.object,
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  text: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  icon: PropTypes.string,
};

Boton.defaultProps = {
  hrefNewTab: false,
  style: {},
  onHover(){},
  onClick(){},
  text: 'Boton',
  href: '',
  src: '',
  icon: '',
};

export default Boton;
