import React from 'react';

function SliderContent({src}){
  let imgStyles={
    width:100+"%",
    height: "auto"
  }
  return <img src={src} style={imgStyles} alt="slide-img"></img>;
}

export default SliderContent;