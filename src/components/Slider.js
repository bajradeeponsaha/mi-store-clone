import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = ({start}) => {
  return (
    <Carousel fade>
    {
        //Arrow Function
        start.map((item)=>(
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={item}
                    key={item}
                    alt='First Slide'
                />
            </Carousel.Item>
        ))
    }
      
    </Carousel>
  )
}

export default Slider
