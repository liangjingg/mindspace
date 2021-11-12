import React from 'react';
import generalBtn from '../assets/general.png';
import downBtn from '../assets/down.png';
import overwhelmedBtn from '../assets/overwhelmed.png';
import stressedBtn from '../assets/stressed.png';
import './Home.css';
import { NavLink } from 'react-router-dom';

const home = () => {
    return (
        <div className="AllPages">
            <div className="Home">
                <h1>How are you feeling today?</h1>
                <table>
                    <tr>
                        <td><NavLink to="/general"><img src={generalBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/down"><img src={downBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/overwhelmed"><img src={overwhelmedBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/stressed"><img src={stressedBtn} className="ImgBtn" /></NavLink></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default home;