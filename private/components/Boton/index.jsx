import React, { Component, PropTypes } from 'react';
import './styles.css';

const defaultText = 'Boton';

/**
 * Boton Component
 */
export default class Boton extends Component {

  /**
   * Define what HTML will be  rendered to DOM
   * @method render
   * @return {[type]} [description]
   */
  render() {
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
    if(src){
      contentBoton = <img src={src}/>;
    }else if(text !== defaultText || icon){
      contentBoton = [];
      contentBoton.push(<i key='icon' className={icon}/>);
      contentBoton.push(text);
    }else{
      contentBoton = text;
    }

    if(href){
      return (
        <div className='buttonWrapper'>
          <a className={className}
            onMouseOver={onHover}
            href={href}
            onClick={onClick}
            style={style}
          >
            {contentBoton}
          </a>
        </div>
      );
    }
    return (
      <div className='buttonWrapper'>
        <button className={className}
          onMouseOver={onHover}
          onClick={onClick}
          style={style}
        >
          {contentBoton}
        </button>
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
  text: defaultText,
  style: {},
  onHover(){},
  onClick(){},
};
