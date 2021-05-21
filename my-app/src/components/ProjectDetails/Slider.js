import React, {useState} from "react";  
import '../../style/modules/_slider.scss'
import SliderContent from "../../components/ProjectDetails/SliderContent"


function Slider(props){
  let sliderArr = [<SliderContent src={props.img1}></SliderContent>, <SliderContent src={props.img2}></SliderContent>];
  const [x, setX] = useState(0)
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 *(sliderArr.length-1) ? setX(0):setX(x - 100);
  };
  console.log(sliderArr.length);
  console.log(sliderArr.findIndex(item));
  return(
    <div className="slide-container">
      <div className="slider">
        {sliderArr.map((item, index)=> {
          return(
            <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
              {item}
            </div>
          );
        })}
          <button id="goLeft" onClick={goLeft}>
          left
          </button>
          <button id="goRight" onClick={goRight}>
          right
          </button>
      </div>
      <p className="slide-pg-count">0{sliderArr.index}0{sliderArr.length}</p> 


    </div>
  );
}

export default Slider;