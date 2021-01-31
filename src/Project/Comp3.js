import { Carousel } from 'react-bootstrap';
import React from 'react';
import './style/css/comp1.css';
import img1 from './style/images/comp3/1.jpg'
import img2 from './style/images/comp3/2.jpg'
import img3 from './style/images/comp3/3.jpg'
import { Button } from '@material-ui/core';


export default class Comp3 extends React.Component {

  render() {
    return (
      <div style={{ marginTop: 50}}>
          <h3 style={{textAlign: 'center', color: '#6D6969'}}><u>Our Blogs</u></h3><br></br>
        <Carousel style={{width: '70%', margin:'auto' }}>
          <Carousel.Item>
              <table>
                  <tr>
                      <td width="50%">
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="First slide"
                        />
                      </td>
                      <td width="50%" style={{textAlign:'center'}}>
                        <h3 style={{fontSize: '2vw'}}>Walking is the best Medicine</h3>
                        <p style={{fontSize: '1vw'}}>Read on to learn about some of the benefits of walking.</p>
                        <Button variant="contained" color="Primary" style={{fontSize: '1vw'}}>Check Out Our Blogs</Button>
                      </td>
                  </tr>
              </table>
          </Carousel.Item>
          <Carousel.Item>
              <table>
                  <tr>
                      <td width="50%">
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="First slide"
                        />
                      </td>
                      <td width="50%" style={{textAlign:'center'}}>
                        <h3 style={{fontSize: '2vw'}}>When diet is wrong, medicine <br/>is of no use.</h3>
                        <p style={{fontSize: '1vw'}}>Read on to learn about some of the benefits of walking.</p>
                        <Button variant="contained" color="Primary" style={{fontSize: '1vw'}}>Check Out Our Blogs</Button>
                      </td>
                  </tr>
              </table>
          </Carousel.Item>
          <Carousel.Item>
              <table>
                  <tr>
                      <td width="50%">
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                      </td>
                      <td width="50%" style={{textAlign:'center'}}>
                        <h3 style={{fontSize: '2vw'}}>All progress takes place outside the comfort zone.</h3>
                        <p style={{fontSize: '1vw'}}> Read on to learn about some of the benefits of walking.</p>
                        <Button variant="contained" color="Primary" style={{fontSize: '1vw'}}>Check Out Our Blogs</Button>
                      </td>
                  </tr>
              </table>
          </Carousel.Item>
        </Carousel><br/><br/>
      </div>
    )
  }
}