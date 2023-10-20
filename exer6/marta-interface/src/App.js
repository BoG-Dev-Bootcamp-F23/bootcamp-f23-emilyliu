import './App.css';
import LinesPage from './pages/LinesPage.js';
import Header from './components/Header.js';
import { useState, useEffect } from 'react';

function App() {
  const [currColor, setCurrColor] = useState("GOLD")
  const [trainData, setTrainData] = useState(null)
  const [stationData, setStationData] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const trainResponse = await fetch("http://13.59.196.129:3001/arrivals/" + currColor)
      const trainDataAPI = await trainResponse.json()
      const stationResponse = await fetch("http://13.59.196.129:3001/stations/" + currColor)
      const stationDataAPI = await stationResponse.json()
      setTrainData(trainDataAPI)
      setStationData(stationDataAPI)
      setLoading(false)
    }
    fetchData()
  }, [currColor])


  return (
    <div className="App">
      <Header 
        setGold={() => {setCurrColor("GOLD")}}
        setRed={() => {setCurrColor("RED")}}
        setBlue={() => {setCurrColor("BLUE")}}
        setGreen={() => {setCurrColor("GREEN")}}
      />
      {!loading ? <LinesPage currColor = {currColor} trainData = {trainData} stationData = {stationData} setTrainData = {setTrainData}/>: <h1>loading</h1>}
      
    </div>
  );
}

export default App;
