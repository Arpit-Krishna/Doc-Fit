import React, {useState} from 'react'
import Navbar from './Navbar'
import "./style/map.css"
import Map from './Map'
import SearchBox from './SearchBox'


export default function DocMap() {
  const [selectPosition, setSelectPosition] = useState(null);
  return (
    <div>
        <Navbar/>
      <div style={{ 
       display: 'flex',
       flexDirection: "row", 
       width:"100vw", 
       height:"100vh",  
       }}>
        <div style={{ width:"50vw", height: "100vh"}}>
        <Map selectPosition = {selectPosition}/>
      </div>
      <div style={{ width:"50vw",}}>
        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
    </div>
    </div>

  )
};