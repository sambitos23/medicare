import { Carousel } from 'react-bootstrap';
import React from 'react';
import './style/css/comp1.css';
import img1 from './style/images/crousel 1/1st.jpg'
import img2 from './style/images/crousel 1/2nd.jpg'
import img3 from './style/images/crousel 1/3rd.jpg'


export default class Comp1 extends React.Component {

  render() {
    return (
      <div style={{ marginTop: 80}}>
        <Carousel style={{width: '93%', margin:'auto' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{fontSize: '2vw'}}>We will give you the best Medication</h3>
              <p style={{fontSize: '1vw'}}>Medicine has been practiced since prehistoric times, during most of which it was an art (an area of skill and knowledge) frequently having connections to the religious and philosophical beliefs of local culture.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{fontSize: '2vw'}}>We will take care of your health, as your famity</h3>
              <p style={{fontSize: '1vw'}}>CARE's programmes in the developing world address a broad range of topics including emergency response, food security, water and sanitation, economic development, climate change, agriculture, education, and health.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{fontSize: '2vw', color: '#6D6969'}}>Our Doctors give you the best advice of your health</h3>
              <p style={{fontSize: '1vw', color: '#6D6969'}}>Advice is believed to be theoretical, and is often considered taboo as well as helpful. The kinds of advice can range from systems of instructional and practical toward more esoteric and spiritual</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}