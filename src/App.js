import React from 'react';
import Appbar from "./Project/Appbar";
import Comp1 from "./Project/Comp1";
import Comp2 from "./Project/Comp2";
import Comp3 from "./Project/Comp3";
import Footer from "./Project/footer"

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Appbar/>
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <Footer />
      </div>
    )
  }
}