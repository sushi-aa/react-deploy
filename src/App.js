import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical';
//import Title from './Title';
import {AnimatedText} from "./AnimatedText";

function App() {
  return (
    <>
    <div>
      HELLO! THIS IS A TEST
    </div>
    
    <p>
        I am {' '}
        <Typical
          loop={Infinity}
          wrapper='b'
          steps={[
            'just trying this out ', 2000,
            'experimenting ', 2000,
            'creating a website on gh pages ', 2000,
            'doing a typerwriter effect ', 2000,
          ]}
        />
      </p>

    <div className="App">
      <AnimatedText textColor="#ffffff" overlayColor="#bb23fe" >
        HOVER OVER ME
      </AnimatedText>
    </div>

    </>
  );
}

export default App;
