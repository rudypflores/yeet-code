import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ProblemScreen from './screens/ProblemScreen';


function App() {

  const [page, setPage] = useState(0);
  const [next, setNext] = useState(false);

  const increase = () => {
    setPage(page+1);
  };

  const goToNext = () => {
    ReactDOM.render(<ProblemScreen />, document.getElementById('root'));
  };

  const renderPage = () => {

    switch(page) {
      case 0:
        return (
          <React.Fragment>
            <div className="bottom-left" style={{ flexFlow:'row nowrap', justifyContent:'flex-end', alignItems:'center'}}>
              <p id="yeet-mode" onClick={increase}>YEET MODE</p>
              <img src={require('./img/Icons/green_arrow.png')} id="green-arrow" alt="green arrow"/>
            </div>
            <div className="bottom-right">
              <p style={{ fontWeight:'bolder', color:'gray' }} className="slideRight">DESCRIPTION OF YEET MODES</p>
            </div>
          </React.Fragment>
        );

      case 1:
        return (
          <React.Fragment>
            <div className="bottom-left" style={{ flexFlow:'row nowrap', justifyContent:'flex-end', alignItems:'center'}}>
              <p id="yeet-mode">YEET MODE</p>
              <img src={require('./img/Icons/green_arrow.png')} id="green-arrow" alt="green arrow"/>
            </div>
            <div className="bottom-right">
              <div className="wrapper-row" style={{ color:'black', fontWeight:'bolder' }}>
                <p onClick={increase} style={{ cursor:'pointer', color:'#7500A9' }}>PLAY</p>
                <p>COMPETE</p>
                <p>LEARN</p>
              </div>
            </div>
          </React.Fragment>
        );
      
      case 2:
        return (
          <React.Fragment>
            <div className="bottom-left">
            <p id="language">LANGUAGE</p>
            <div className="wrapper-row">
              <p onClick={increase}>PYTHON</p>
              <p onClick={increase}>JAVA</p>
              <p onClick={increase}>C++</p>
              <p onClick={increase}>JS</p>
              <p onClick={increase}>OTHER</p>
            </div>
            </div>
            <div className="bottom-right">
            </div>
          </React.Fragment>
        );
        
      case 3:
        return (
          <React.Fragment>
            <div className="bottom-left">
            <p id="language">LANGUAGE</p>
            <div className="wrapper-row">
              <p>PYTHON</p>
              <p>JAVA</p>
              <p>C++</p>
              <p>JS</p>
              <p>OTHER</p>
            </div>
            </div>
            <div className="bottom-right" style={{ flexFlow:'column nowrap' }}>
              <div className="bottom-right" style={{ width:'100%' }}>
                <label>EASY</label>
                <div className="slidecontainer">
                  <input type="range" min="1" max="3" className="slider" onClick={() => setNext(true)}></input>
                </div>
                <label>HARD</label>
              </div>
              <div className="bottom-right" style={{ alignItems:'center', justifyContent:'center', marginTop:'25px'}}>
                {
                  next ?
                  <React.Fragment>
                    <p style={{ marginRight:'10px', cursor:'pointer' }} onClick={goToNext}>
                      YEET!
                    </p>
                    <img src={require('./img/Icons/green_arrow.png')} alt="green arrow"/>
                  </React.Fragment>
                  :
                  null
                }
              </div>
            </div>
          </React.Fragment>
        );

        default:
          return;
    }
  }

  return (
    <div id="main">
      {/* Navbar */}
      <div id="top-nav">
        <img src={require('./img/logo.png')} alt="logo"/>
        <div className="wrapper">
          <p style={{ marginRight:'50px', fontWeight:'bolder' }}>HELP</p>
          <img src={require('./img/Icons/search_icon.png')} alt="search"/>
        </div>
      </div>
      {/* Middle Section */}
      <div id="banner">
        <div className="left">
          <h1 id="title">CodePlay<br/>Learn</h1>
          <h3 id="sub-title">Yeet code is a jhlasdkjfhalk that<br/> allows users to jfhakjsdh sdasjd shd ahds<br/> sajdhaksjd</h3>
        </div>
        <div className="right">
          <img src={require('./img/homepage_img.png')} id="hero" alt="hero"/>
        </div>
      </div>
      {/* Bottom Nav */}
      <div id="bottom-nav">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
