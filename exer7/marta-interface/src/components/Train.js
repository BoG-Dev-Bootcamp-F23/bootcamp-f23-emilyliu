import marta from '../images/marta.png';
import right_arrow from '../images/right_arrow.png'

export default function Train(props) {
    const { data } = props

    const colorMap = {
        "GOLD": "gold",
        "RED": "red",
        "GREEN": "green",
        "BLUE": "blue"
    }

    function returnDelay() {
        if (data["DELAY"] === "T0S") { return <p className = "on_time">On time</p> } 
        else { return <p className = "delayed">Delayed </p> }
    }

    function returnWaitTime() {
        if (data["WAITING_TIME"].split(" ")[0] === "Arriving") { return <h1 className = "wait_time">Arriving</h1>}
        else {
            return (
                <div className = "wait_time_container">
                    <h1 className = "wait_time" style = {{margin: 0}}>{data["WAITING_TIME"].split(" ")[0]}</h1>
                    <p className = "wait_time" style = {{margin: 0}}>min</p>
                </div>
                
            )
        }
    }

    return (
        <div className = "train_component">
            <div className = "left_side">
                <img src = {marta} className = "marta_logo" />
                <div className = "middle_component">
                    <div className = "top_middle_component">
                        <h1 className = "station">{ data["STATION"] } </h1>
                        <img src = {right_arrow} className = "right_arrow"/>
                        <h1 className = "station">{ data["DESTINATION"] } </h1>
                    </div>
                    <div className = "bot_middle_component">
                        <div className = "line" style = {{backgroundColor: colorMap[data["LINE"]]}}>{ data["LINE"] }</div>
                        { returnDelay() }
                    </div>
                </div>
            </div>
            
            { returnWaitTime() }


        </div>
    )
}