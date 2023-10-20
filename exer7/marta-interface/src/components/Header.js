export default function Header(props) {

    return (
        <div className = "header_container">
            <button onClick = {props.setGold} className = "line_button" style={{backgroundColor: 'GOLD'}}>Gold</button>
            <button onClick = {props.setRed} className = "line_button" style={{backgroundColor: 'RED'}}>Red</button>
            <button onClick = {props.setBlue} className = "line_button" style={{backgroundColor: 'BLUE'}}>Blue</button>
            <button onClick = {props.setGreen} className = "line_button" style={{backgroundColor: 'GREEN'}}>Green</button>
        </div>
    )
}