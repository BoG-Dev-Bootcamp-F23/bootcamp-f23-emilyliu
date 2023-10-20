import { useState, useEffect } from 'react';

export default function NavBar(props) {
    const stations = props.data

    function handleStationSelect(station, button) {
        if (props.filter.includes(station.toUpperCase())) {
            props.setFilter(props.filter.filter((st) => st !== station.toUpperCase()))
            button.style.color = 'white'
        } else {
            props.setFilter([...props.filter, station.toUpperCase()])
            button.style.color = 'green'
        }
    }

    return (
        <div className = "nav_bar_component">
            <p>Select your starting station</p>
            {props.filter.length === 0 ? <div className = "station_nav_element" style={{color: 'green'}}>All Stations</div> : <div className = "station_nav_element" style={{color: 'white'}}>All Stations</div>}
            {stations.map((station) => {
                return (
                    <div onClick = {(e) => {handleStationSelect(station, e.target)}} className = "station_nav_element">{station}</div>
                )
            })}
        </div>
    )
}