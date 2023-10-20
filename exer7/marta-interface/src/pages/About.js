import marta_map from '../images/marta_map.jpg';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
    return (
        <div className = "about_container">
            <div className = "about_header">
                <p onClick = {() => navigate("/")} style={{position: 'absolute', left: 20, cursor: 'pointer'}}>Home</p>
                <h1 className = "header_title">About MARTA</h1>
            </div>
            
            <div className = "info_about">
                <img src = {marta_map} className = "marta_map"/>
                <div>
                    <h1>Our Vision</h1>
                    <p>People taking People where they want to go today and tomorrow</p>
                    <h1>Our Mission</h1>
                    <p>To advocate for and provide safe, multimodal transit services that advance prosperity, connectivity and equity for a more livable region.</p>
                    <h1>Our Priorities</h1>
                    <p>Everyday, we will do our part at MARTA to operate a transit system that:
                        <br />1. Consistently provides excellence in customer service
                        <br />2. Delivers the capital program with speed and efficiency
                        <br />3. Strengthens the MARTA brand
                        <br />4. Demonstrates fiscal responsibility
                    </p>
                </div>
            </div>
        </div>
    )
}