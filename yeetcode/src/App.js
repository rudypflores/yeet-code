import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import ProblemScreen from './screens/ProblemScreen';


function App() {
  return (
    <div id="main">
      <h1 id="title">Yeet Code</h1>
      <button 
        onClick={() => {
          ReactDOM.render(<ProblemScreen />, document.getElementById('root'));
        }}  
      >
        Start to yeet
      </button>
    </div>
  );
}

export default App;
