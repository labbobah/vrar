import './App.css';
import NextLaunch from './NextLaunch';
import LastThreeLaunch from './LastThreeLaunch';
import React from 'react';


const App = () => {
  return(<>
    <div className="row">
      <div className="col s3">
        <NextLaunch />
      </div>
      <div className='col s2'></div>
      <div className='col s7'>
        <LastThreeLaunch />
      </div> 
    </div> 
  </>);
}

export default App;
