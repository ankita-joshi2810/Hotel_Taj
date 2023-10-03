import React from 'react'
import {Carousel} from 'react-bootstrap'
import slide1 from '../Assets/slide01.jpg'
import slide2 from '../Assets/slide02.jpg'
import slide3 from '../Assets/slide03.jpg'

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={100}>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={100}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={100}>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home