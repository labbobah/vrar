import React, {useState, useEffect} from 'react';
import LaunchCard from './LaunchCard';

const API_URL = "https://api.spacex.land/rest/launches-past?limit=3&order=DESC";

const LastThreeLaunch = () => {
const [lastThreeLaunches, setLastThreeLaunches] = useState([]);
  
    const lastThreeLaunchesConst = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();

        setLastThreeLaunches(data);
      
    }    
    

    useEffect(() => {
        lastThreeLaunchesConst();
    }, []);

    
    return (
        <div className="row">
          <h1>Last Three Launch </h1>
            <div className="col s5">
              {
                  lastThreeLaunches.map((item) => (
                    <LaunchCard key={item.id} launch={item} />
                  ))
              }
            </div>
        </div>
    );
}

export default LastThreeLaunch;