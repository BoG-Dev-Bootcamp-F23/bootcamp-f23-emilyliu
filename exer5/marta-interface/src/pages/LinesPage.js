// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import TrainList from '../components/TrainList';
import NavBar from '../components/NavBar';
import { useState } from 'react';

export default function LinesPage() {
  // initialize some currColor state
  const [currColor, setCurrColor] = useState("GREEN")

  return (
    <div className = "lines_page_container">
        <h1>{currColor}</h1>
        <div className = "info_container">
            <NavBar color={currColor} data={stationData} />
            <TrainList color={currColor} data={trainData} style = {{align_self: "center"}}/>
        </div>
    </div>
  );
}