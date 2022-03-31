import React, {useState} from "react";
import { Link } from "react-router-dom";

const LaunchCard = ({launch}) => {  
    return(
        <div className="row">
            <div className="col s6 m12">
                <div className="card">
                <div className="card-image">
                    <img src={launch.links ? launch.links.flickr_images[0] || launch.links.mission_patch_small: "https://viaplaceholder.com/500"}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{launch.mission_name}</span>
                    <h5>Lauch Date(Local Date): {launch.launch_date_local}</h5>
                    <p>{launch.details}</p>
                    <p><Link to={`/Details/${launch.id}`}>View More</Link></p>
                </div>
                </div>
            </div>
        </div>
    );
              
}

export default LaunchCard;
