import React, { Component, PropTypes } from 'react';
import './styles.css';

/**
 * Boton Component
 */
export default class Boton extends Component {

  /**
   * Boton Maker
   * @method botonMaker
   * @return {jsx} [Componente jsx]
   */
  botonMaker() {
    const {
      className,
      style,
      onHover,
      onClick,
      text,
      href,
      src,
      icon,
    } = this.props;

    let contentBoton;

    if(text || icon){
      contentBoton = [];
      contentBoton.push(<i key='icon' className={icon}/>);
      contentBoton.push(text);
    }else if(src){
      contentBoton = <img src={src}/>;
    }else{
      contentBoton = 'Boton';
    }

    if(href){
      return (
        <a className={className}
          onMouseOver={onHover}
          href={href}
          onClick={onClick}
          style={style}
        >
          {contentBoton}
        </a>
      );
    }
    return (
      <button className={className}
        onMouseOver={onHover}
        onClick={onClick}
        style={style}
      >
        {contentBoton}
      </button>
    );
  }

  /**
   * Define what HTML will be  rendered to DOM
   * @method render
   * @return {[type]} [description]
   */
  render() {
    return (
      <div className={'buttonWrapper'}>
        {this.botonMaker()}
      </div>
    );
  }
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
  text: '',
  style: {},
  onHover(){},
  onClick(){},
};
