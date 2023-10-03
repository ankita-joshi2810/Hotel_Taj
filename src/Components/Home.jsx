import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import slide1 from '../Assets/slide01.jpg'
import slide2 from '../Assets/slide02.jpg'
import slide3 from '../Assets/slide03.jpg'

const Home = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="img"
                                src={slide1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="img"
                                src={slide2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="img"
                                src={slide3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </div>
    )
}

export default Home