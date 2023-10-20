import Train from './Train';
import { useState, useEffect } from 'react';

export default function TrainList(props) {
    let railArrivals = props.data

    if (props.filter.length !== 0) {
        railArrivals = props.data.filter((train) => (props.filter.includes(train["STATION"].replace(" STATION", ""))))
    }

    const [displayData, setDisplayData] = useState(railArrivals);
    const [filters, setFilters] = useState([])

    useEffect(() => {
        filters.forEach((filter) => {
            railArrivals = railArrivals.filter((train) => train[filter[0]] === filter[1])
        })
        setDisplayData(railArrivals)
    }, [props.filter])

    useEffect(() => {
        let filteredData = railArrivals
        filters.forEach((f) => {
            filteredData = filteredData.filter((train) => (
                train[f[0]] === f[1]
            ))
        })
        setDisplayData(filteredData)
        console.log(displayData)
    }, [filters])

    function filterData(e, targetData, filter) {
        if (e.target.style.backgroundColor === 'lightgray') {
            setFilters(filters.filter((f) => (f[0]!== targetData) && f[1]!==filter))
            e.target.style.backgroundColor = 'white'
        } else {
            setFilters([...filters, [targetData, filter]])
            e.target.style.backgroundColor = 'lightgray'
        }
    }

    function determineDirection() {
        if (props.color.toUpperCase() === "GOLD" | props.color.toUpperCase() === "RED") {
            return (
                <div className = "button_bar">
                    <button onClick = {(e) => filterData(e, "WAITING_TIME", "Arriving")} className = "train_specific_button">Arriving</button>
                    <button onClick = {(e) => filterData(e, "DELAY", "T0S")} className = "train_specific_button">Scheduled</button>
                    <button onClick = {(e) => filterData(e, "DIRECTION", "N")} className = "train_specific_button">Northbound</button>
                    <button onClick = {(e) => filterData(e, "DIRECTION", "S")} className = "train_specific_button">Southbound</button>
                </div>
            )
        } else {
            return (
                <div className = "button_bar">
                    <button onClick = {(e) => filterData(e, "WAITING_TIME", "Arriving")} className = "train_specific_button">Arriving</button>
                    <button onClick = {(e) => filterData(e, "DELAY", "T0S")} className = "train_specific_button">Scheduled</button>
                    <button onClick = {(e) => filterData(e, "DIRECTION", "E")} className = "train_specific_button">Eastbound</button>
                    <button onClick = {(e) => filterData(e, "DIRECTION", "W")} className = "train_specific_button">Westbound</button>
                </div>
            )
        }
    }

    return (
        <div className = "train_list_component">
            <div>
                { determineDirection() }
            </div>
            {displayData.length === 0 ? <h1>No current trains match filters</h1>: displayData.map((train) => {
                return <Train data = {train} />
            })}
            
        </div>
    );
}