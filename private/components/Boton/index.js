import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

/**
 * Boton Component
 */
class Boton extends Component {
  /**
   * Define what HTML will be  rendered to DOM
   * @method render
   * @return {[type]} [description]
   */
  render() {
    const className = this.props.class ? this.props.class : 'button';
    const {
      style,
      onHover,
      onClick,
      text,
      href,
      src,
      icon,
    } = this.props;
    
    let contentBoton;
    if(href){
      if(text || icon){
        contentBoton = (
          <a className={className} onMouseOver={onHover} href={href} onClick={onClick} style={style()}>
            <i key='icono' className={icon}></i>
            {text || ''}
          </a>
        )
      }else if(src){
        contentBoton = (
          <a className={className} onMouseOver={onHover} href={href} onClick={onClick} style={style()}>
            <img src={src} />
          </a>
        )
      }else{
        contentBoton = (
          <a className={className} onMouseOver={onHover} href={href} onClick={onClick} style={style()}>
            Boton
          </a>
        )
      }
    }else{
      if(text || icon){
        contentBoton = (
          <button className={className} onMouseOver={onHover} onClick={onClick} style={style()}>
            <i key='icono' className={icon}></i>
            {text || ''}
          </button>
        )
      }else if(src){
        contentBoton = (
          <button className={className} onMouseOver={onHover} onClick={onClick} style={style()}>
            <img src={src} />
          </button>
        )
      }else{
        contentBoton = (
          <button className={className} onMouseOver={onHover} onClick={onClick} style={style()}>
            Boton
          </button>
        )
      }
    }
    return (
      <div className='buttonWrapper'>
        {contentBoton}
      </div>
    );
  }
}

Boton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.func,
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  text: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  icon: PropTypes.string,
};

Boton.defaultProps = {
  style = function (){},
  onHover = function (){},
  onClick = function (){}
};

export default Boton;
