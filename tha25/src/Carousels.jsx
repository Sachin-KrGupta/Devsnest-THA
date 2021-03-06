import React from 'react'
import {Carousel} from "react-bootstrap"

export default function Carousels() {
    return (
        <div className="carousel">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://ke.boell.org/sites/default/files/styles/var_larger/public/uploads/2014/11/radekartphoto-4196.jpg?itok=ruWmZPF_"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://wds.squiz.cloud/__data/assets/image/0011/296948/Art-recovery-WEB-NEWS.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.riverartsdistrict.com/wp-content/uploads/2020/04/DeannaChilian-1440x500.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}
