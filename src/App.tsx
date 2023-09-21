import React from 'react';
import './App.css';
import logo from './images/SpaceX-logo.png';

function App() {

  let list= [1,2,3,4,5,6,7,8]
  let data = new Date("2006-03-25T10:30:00+12:00");
  console.log("Date:",data.getMonth())
  return (
    <div className="App">

      <div className='header'>
        <img src={logo} alt="logo" className='logo'/>
      </div>

      <div className='container'>
        {list.map(elem => 
        <div className='box'>

          <div className='img'>
            <img className="thumbnail" src="https://live.staticflickr.com/65535/50065947218_88ef29951a_o.jpg" alt="Rocket" />
          </div>

          <div className='desc-box'>
            <div className='desc-header'>
              <p>Falcon 9</p>
            </div>
            <div className='info-box'> 

              <div className='rocket-model'>
                  <div className='rocket-modeltype'>Rocket: </div>
                  <div className= "rocket-modelinfo">Falcon</div>
              </div>

              <div></div>

            </div>
          </div>
        
        </div>)}
        
      </div>
      
    </div>
  );
}

export default App;
