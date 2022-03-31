import React, {Suspense, useEffect, useState} from 'react';
import LaunchCard from './LaunchCard';
import { DataGrid } from '@mui/x-data-grid';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';




const AllLaunches = () => {
    
    const [launches, setLaunches] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);
    
    const fetchData = () => {
        fetch("https://api.spacex.land/rest/launches")
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
        fetchData();
    }, []);

    const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'launch_date_local', headerName: 'Lauch Date Local', width: 190 },
    { field: 'launch_site.site_id', headerName: 'Site Name ', width: 400},
    { field:"mission_name", headerName:'Mission Name', width: 150},
    {
        field: 'details',
        headerName: 'Details',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 400,
    },
    
    ];

  return (
    <div style={{ height: 650, width: '100%' }}>
        <h4 style={{ textAlign: "center"}}> All The Mission are here </h4>
        
      <DataGrid
        rows={launches}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default AllLaunches;