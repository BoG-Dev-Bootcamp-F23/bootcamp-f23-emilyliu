
export default function NavBar(props) {
    const { color, data } = props
    const mapColor = {
        "GOLD": "gold",
        "RED": "red",
        "GREEN": "green",
        "BLUE": "blue"
    }
    const stations = data[mapColor[color]]
    console.log(stations)
    console.log(color)
    return (
        <div className = "nav_bar_component">
            <p>Select your starting station</p>
            <div className = "station_nav_element">All Stations</div>
            {stations.map((station) => {
                return (
                    <div className = "station_nav_element">{station}</div>
                )
            })}
        </div>
    )
}