
import './App.css';
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Table from './table/Table';




function App() {//react functional component
  //1 started
  const [data, setData] = useState([]);

  useEffect( () => {
    (async()=>{
      let po =await axios("https://api.tvmaze.com/search/shows?q=snow");  //po=promise object
      console.log("befor seting",po.data)
      setData(po.data);
      
      console.log('after seting',data)

    })();               //immidiatly invoked function expretion (IIFE)
  }, [])
   
 
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "Type",
            accessor: "show.type"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language"
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres"
          },
          {
            Header: "Runtime",
            accessor: "show.runtime"
          },
          {
            Header: "Status",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );


  // let data = useMemo( ()=>[
  //   {
  //     col1: 'ritik',
  //     col2: 'patidar',
  //   },
  //   {
  //     col1: 'anurag',
  //     col2: 'sharma',
  //   },
  //   {
  //     col1: 'vivek',
  //     col2: 'mukdam',
  //   }
  // ],[]);

 
 
    //2.function defination
  
  
  
  //3.return statment/jsx
  return (
    <div className="App">
     
       <Table columns={columns}  data={data} />
    </div>
  );
}

export default App;
