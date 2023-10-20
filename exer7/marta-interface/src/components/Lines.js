import TrainList from './TrainList';
import NavBar from './NavBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lines(props) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState([])

  return (
    <div className = "lines_page_container">
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style ={{position: 'absolute', left: '20px', display: 'flex'}}>
            <h1 style={{marginRight: '20px', cursor: 'pointer'}} onClick={() => navigate("/")}>Home</h1>
            <h1 style={{cursor: 'pointer'}} onClick={() => navigate("/about")}>About</h1>
          </div>
          <h1>{props.currColor.toUpperCase()}</h1>
        </div>
        
        <div className = "info_container">
            <NavBar data={props.stationData} setFilter = {setFilter} filter = {filter}/>
            <TrainList color={props.currColor} data={props.trainData} filter = {filter} style = {{align_self: "center"}}/>
        </div>
    </div>
  );
}