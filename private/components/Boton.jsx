import React, { Component, PropTypes } from 'react';

/**
 * Boton Component
 */
class Boton extends Component {

  /**
   * constructor of the class
   * @method constructor
   * @param  {[type]}    options [description]
   * @return {[type]}            [description]
   */
  constructor() {
    super();
  }

  /**
   * Define what HTML will be  rendered to DOM
   * @method render
   * @return {[type]} [description]
   */
  render() {
    const {
      style,
      onHover = function (){},
      onClick = function (){},
      text,
      src,
      icon,
    } = this.props;
    let contentBoton;

    if(text && !src && !icon){
      contentBoton = <span>{text}</span>
    }else if(!text && src && !icon){
      contentBoton = <img src={src}/>
    }else if(!text && !src && icon){
      contentBoton = <i className={icon}></i>
    }else if(text && icon && !src){
      contentBoton = []
      contentBoton.push(<i key='icono' className={icon}></i> )
      contentBoton.push(<span key='texto'>{text}</span>)
    }else{
      contentBoton = <span>Boton</span>
    }
    return (
      <div>
        <button
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
  style: PropTypes.Object,
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  text: PropTypes.string,
  src: PropTypes.string,
  icon: PropTypes.string,
};

export default Boton;
