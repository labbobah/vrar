import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    let params = useParams();
    let id = params.id;
    const [launch, setLaunch] = useState([]);
    
    useEffect(() => {
        fetch("https://api.spacex.land/rest/launch/"+id)
        .then((response) => response.json())
        .then(data => setLaunch(data));
    }, []);

    

    try {
        return (
            <>
            <h1 style={{textAlign:"center"}}> Here we goooooo :)</h1>
            <div>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src={launch.links? launch.links.mission_patch_small : "https://viaplaceholder.com/400"} alt="" className="circle"/>
                        <span className="title">{launch.mission_name} - {launch.mission_id?launch.mission_id:""}</span>
                        <p>{launch.details} <br/>
                           {launch.launch_date_local} <br/>
                        </p>
                        
                        <hr/>
                        
                        <h5 style={{textAlign:"center"}}> First Stage Used </h5>
                        <p>
                            <u>Rocket_name:</u> {launch.rocket.rocket_name} <br/>
                            <u>Rocket_type:</u> {launch.rocket.rocket_type} <br/>
                            <u>Original Launch:</u> {launch.rocket.first_stage.cores[0].core.original_launch} <br/>
                            <u>Attempts:</u> {launch.rocket.first_stage.cores[0].core.asds_attempts} <br/>
                            <u>Landings:</u> {launch.rocket.first_stage.cores[0].core.asds_landings} <br/>
                        </p>
                    
                            {
                                (launch.rocket.first_stage.cores[0].core.reuse_count > 0) ?
                                    ( <>
                                        <h5 style={{textAlign:"center"}}> List of all missions </h5>
                                        <div style={{textAlign:"center"}}>
                                            <p>
                                            <u>Nombre de mission effectué: </u>{launch.rocket.first_stage.cores[0].core.reuse_count} <br/>
                                            </p>
                                            {
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Flight</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        
                                                            {
                                                                launch.rocket.first_stage.cores[0].core.missions.map((item) => (
                                                                    <tr>
                                                                        <td>{item.flight} </td>
                                                                        <td>{item.name}</td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        
                                                    </tbody>
                                                </table>
                                                
                                            }   
                                            
                                        </div>
                                        </>
                                    ) : 
                                    (
                                        <p>Aucune autre mission effectué </p>
                                    )
                            }
                    </li>      
                        
                        
                </ul>
            </div>  
            </>
        )
    }catch(ex){
        console.log(ex)
    }
}

export default Details;