import React, {useState} from "react";  
import '../../style/modules/_slider.scss'
import SliderContent from "../../components/ProjectDetails/SliderContent"


function Slider(props){
  let sliderArr = [<SliderContent src={props.img1}></SliderContent>, <SliderContent src={props.img2}></SliderContent>,<SliderContent src={props.img1}></SliderContent>,<SliderContent src={props.img1}></SliderContent>,<SliderContent src={props.img1}></SliderContent>];
  const [state, setState] = useState({
    activeIndex: 0
  })

  const getWidth = () => window.innerWidth
  const { activeIndex } = state

  const [x, setX] = useState(0)


  // Next slide
  const nextSlide = () => {

    // Translate
    x === -100 *(sliderArr.length-1) ? setX(0):setX(x - 100);

    // Return state
    if(activeIndex === sliderArr.length-1){

      return setState({
        activeIndex: 0
      })
    }

    setState({
      activeIndex: activeIndex + 1
    })
  };

  // Previous slide
  const prevSlide = () => {

    // Translate
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    
    // Return state
    if(activeIndex === 0){

      x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x - 100);
      return setState({
  
        activeIndex: (sliderArr.length)-1
        
        // activeIndex: 0
      })
    }
    setState({
      activeIndex: activeIndex - 1
    })
  };


  // arraySize
  var totalItems = sliderArr.length;

  // console.log(sliderArr.length);

  
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
          <button id="prevSlide" onClick={prevSlide}>
          {/* left */}
          </button>
          <button id="nextSlide" onClick={nextSlide}>
          {/* right */}
          </button>
      </div>
      <p className="slide-pg-count">
        0{activeIndex + 1} /
        0{totalItems}
      
      </p> 


    </div>
  );

}

export default Slider;