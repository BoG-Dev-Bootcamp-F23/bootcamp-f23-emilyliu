import Header from '../components/Header.js';
import Lines from '../components/Lines.js';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function LinesPage() {
  const navigate = useNavigate();
  const params = useParams();
  const currColor = params.lineColor;
  // const [currColor, setCurrColor] = useState("GOLD")
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
  }, [params])


  return (
    <div className="App">
      <Header 
        setGold={() => {navigate("/line/gold")}}
        setRed={() => {navigate("/line/red")}}
        setBlue={() => {navigate("/line/blue")}}
        setGreen={() => {navigate("/line/green")}}
      />
      {!loading ? <Lines currColor = {currColor} trainData = {trainData} stationData = {stationData} setTrainData = {setTrainData}/>: <h1>loading</h1>}
      
    </div>
  );
}