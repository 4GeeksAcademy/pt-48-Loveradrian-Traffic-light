//import react into the bundle

import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import React, { useState, useEffect } from 'react';


const RedLight = ({ onOf }) => {
  return (
    <>
      {
        <div
          className="red-light__container"
          style={
            onOf
              ? {
                  backgroundColor: 'red',
                  boxShadow: '0 0 50px #ff2100',
                }
              : {}
          }
        ></div>
      }
    </>
  );
};
const OrangeLight = ({ onOf }) => {
  return (
    <>
      {
        <div
          className="orange-light__container"
          style={
            onOf
              ? {
                  backgroundColor: 'orange',
                  boxShadow: '0 0 50px #ffe900',
                }
              : {}
          }
        ></div>
      }
    </>
  );
};
const GreenLight = ({ onOf }) => {
  return (
    <>
      {
        <div
          className="green-light__container"
          style={
            onOf
              ? {
                  backgroundColor: 'green',
                  boxShadow: '0 0 50px #00ff42',
                }
              : {}
          }
        ></div>
      }
    </>
  );
};

const TrafficLight = () => {
  const [redLight, setRedLight] = useState(false);
  const [orangeLight, setOrangeLight] = useState(false);
  const [greenLight, setGreenLight] = useState(false);

  const setRed = () => {
    setRedLight(true);
    console.clear();
    console.log('soy rojo durante 3 segundos');
    setTimeout(() => {
      setOrange();
    }, 3000);
  };
  const setOrange = () => {
    setRedLight(false);
    setOrangeLight(true);
    console.log('soy naranja durante 1 segundos');
    setTimeout(() => {
      setGreen();
    }, 1000);
  };
  const setGreen = () => {
    setOrangeLight(false);
    setGreenLight(true);
    console.log('soy verde durante 3 segundos');
    console.log('Me reinicio en 3 segundos');
    setTimeout(() => {
      restartLight();
    }, 3000);
  };

  const restartLight = () => {
    setGreenLight(false);
    setRed();
  };

  const startLight = () => {
    setRed();
  };
  useEffect(() => startLight, []);

  return (
    <>
      <div className="traffic-light__container">
        {<RedLight onOf={redLight} />}
        {<OrangeLight onOf={orangeLight} />}
        {<GreenLight onOf={greenLight} />}
      </div>
    </>
  );
};

export default function App() {
  return <TrafficLight />;
}
