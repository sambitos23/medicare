import React from 'react';
import './style/css/comp2.css';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import imgg1 from "./style/images/crousal2/1.jpg"
import imgg2 from "./style/images/crousal2/2.jpg"
import imgg3 from "./style/images/crousal2/3.jpg"
import imgg4 from "./style/images/crousal2/4.jpg"
import imgg5 from "./style/images/crousal2/5.jpg"
import imgg6 from "./style/images/crousal2/kidney.jpg"
import imgg7 from "./style/images/crousal2/nuron.jpg"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


export default class Comp2 extends React.Component { 

  render() {
    return (
      <div style={{ marginTop: 30}}>
        <h3 style={{ textAlign: "center", color: '#6D6969' }}>Specialisms Treatement</h3><br/>
        <div className="App">
            <Carousel breakPoints={breakPoints}>
            <Item style={{backgroundColor: 'white', height: '100%', outline: 'none'}}>
                <div>
                    <div style={{fontSize: 16, color: 'black'}}><b>Dieticians Specialist</b></div>
                    <img src={imgg3} style={{width: '80%'}}/>
                    <span style={{fontSize: 26, color: '#6D6969', marginLeft: 20, }}><b>01</b></span>
                    <div style={{fontSize: 18, color: '#6D6969'}}><b>Dr. Susmita Singh</b></div>
                    <div style={{fontSize: 12, color: '#6D6969'}}><i>MD from USA</i></div>
                </div>
            </Item>
            <Item style={{backgroundColor: 'white', height: '100%', outline: 'none'}}>
                <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{fontSize: 16, color: 'black'}}><b>Eye Specialist</b></div>
                    <img src={imgg2} style={{width: '80%'}}/>
                    <span style={{fontSize: 26, color: '#6D6969', marginLeft: 20, }}><b>02</b></span>
                    <div style={{fontSize: 18, color: '#6D6969'}}><b>Dr. Koyel Madhaban</b></div>
                    <div style={{fontSize: 12, color: '#6D6969'}}><i>MD from Chandigar</i></div>
                </div>
            </Item>
            <Item style={{backgroundColor: 'white', height: '100%', outline: 'none'}}>
                <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{fontSize: 16, color: 'black'}}><b>Back Pain Specialist</b></div>
                    <img src={imgg5} style={{width: '80%'}}/>
                    <span style={{fontSize: 26, color: '#6D6969', marginLeft: 20, }}><b>03</b></span>
                    <div style={{fontSize: 18, color: '#6D6969'}}><b>Dr. Mahi Chandanagar</b></div>
                    <div style={{fontSize: 12, color: '#6D6969'}}><i>MD from Delhi, AIIMS</i></div>
                </div>
            </Item>
            <Item style={{backgroundColor: 'white', height: '100%', outline: 'none'}}>
                <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{fontSize: 16, color: 'black'}}><b>Headache Specialist</b></div>
                    <img src={imgg4} style={{width: '80%'}}/>
                    <span style={{fontSize: 26, color: '#6D6969', marginLeft: 20, }}><b>04</b></span>
                    <div style={{fontSize: 18, color: '#6D6969'}}><b>Dr. Biswajeey Kapil</b></div>
                    <div style={{fontSize: 12, color: '#6D6969'}}><i>MD from Californiya</i></div>
                </div>
            </Item>
            <Item style={{backgroundColor: 'white', height: '100%', outline: 'none'}}>
                <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{fontSize: 16, color: 'black'}}><b>Kidney Specialist</b></div>
                    <img src={imgg6} style={{width: '80%'}}/>
                    <span style={{fontSize: 26, color: '#6D6969', marginLeft: 20, }}><b>05</b></span>
                    <div style={{fontSize: 18, color: '#6D6969'}}><b>Dr. Susmita Singh</b></div>
                    <div style={{fontSize: 12, color: '#6D6969'}}><i>MD from Mayanmar</i></div>
                </div>
            </Item>
            <Item style={{backgroundColor: 'white', height: '100%', outline: 'none'}}>
                <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{fontSize: 16, color: 'black'}}><b>Heart Disease Specialist</b></div>
                    <img src={imgg1} style={{width: '80%'}}/>
                    <span style={{fontSize: 26, color: '#6D6969', marginLeft: 20, }}><b>06</b></span>
                    <div style={{fontSize: 18, color: '#6D6969'}}><b>Dr. Samarpratap Varma</b></div>
                    <div style={{fontSize: 12, color: '#6D6969'}}><i>MD from Californiya</i></div>
                </div>
            </Item>
            <Item style={{backgroundColor: 'white', height: '100%', outline: 'none'}}>
                <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{fontSize: 16, color: 'black'}}><b>Nuro Psychiatrist </b></div>
                    <img src={imgg7} style={{width: '80%'}}/>
                    <span style={{fontSize: 26, color: '#6D6969', marginLeft: 20, }}><b>07</b></span>
                    <div style={{fontSize: 18, color: '#6D6969'}}><b>Dr. Venkar Raman Swami</b></div>
                    <div style={{fontSize: 12, color: '#6D6969'}}><i>MD from USA</i></div>
                </div>
            </Item>
            </Carousel>
        </div>
      </div>
    )
  }
}