import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import { useState } from 'react';

export default function LinesPage(props) {
  // initialize some currColor state
  // const [currColor, setCurrColor] = useState("GOLD")
  const [filter, setFilter] = useState([])

  return (
    <div className = "lines_page_container">
        <h1>{props.currColor}</h1>
        <div className = "info_container">
            <NavBar data={props.stationData} setFilter = {setFilter} filter = {filter}/>
            <TrainList color={props.currColor} data={props.trainData} filter = {filter} style = {{align_self: "center"}}/>
        </div>
    </div>
  );
}