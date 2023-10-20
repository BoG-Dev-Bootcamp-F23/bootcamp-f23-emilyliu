import About from './About';
import marta_train from '../images/marta_train.jpg'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className = "home_header">
                <h1>MARTA</h1>
                <p1 onClick = {() => navigate("/about")} className = "about_nav">About Marta</p1>
            </div>
            <div className = "home_body">
                <div className = "routes_schedule">
                    <h1>VIEW ROUTES SCHEDULE</h1>
                    <div onClick = {() => {navigate("/line/gold")}} className = "route_schedule_element">Gold Line</div>
                    <div onClick = {() => {navigate("/line/red")}} className = "route_schedule_element">Red Line</div>
                    <div onClick = {() => {navigate("/line/green")}} className = "route_schedule_element">Green Line</div>
                    <div onClick = {() => {navigate("/line/blue")}} className = "route_schedule_element">Blue Line</div>
                </div>
                <img src={marta_train} className = "marta_home_png" />
            </div>
        </div>
    );
}