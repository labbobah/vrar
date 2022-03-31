import React, { useEffect, useState } from 'react';

import LaunchCard from './LaunchCard';

const NextLaunch = () => {

  const [launches, setLaunches] = useState([]);
  const[isLoading, setIsLoading] = useState(false);
  const[isError, setIsError] = useState(false);

  const nextLaunches = () => {
    fetch("https://api.spacex.land/rest/launch-next")
      .then((response) => response.json())
      .then((data) => {
          setIsLoading(false);
          setLaunches(data);
      })
      .catch((err) => {
          setIsLoading(false);
          setIsError(true);
          console.log(err);
      });
  };
  
  useEffect(() => {

    nextLaunches();

  }, []);
  
  return (
    <div className="row" style={{textAlign:"center"}}>
      <h1>Next Launch</h1>
      <div style={{ marginLeft: "25%"}}>
        {
          <LaunchCard launch={launches} />
        }
      </div>
    </div>
  );
}

export default NextLaunch;
