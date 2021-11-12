import React from 'react';
import mediationBtn from '../assets/mediation.png';
import affirmationBtn from '../assets/affirmation.png';
import gamesBtn from '../assets/games.png';
import walkBtn from '../assets/walk.png';
import breathingBtn from '../assets/breathing.png';
import chatBtn from '../assets/chatbot.png';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Down = () => {
    return (
        <div className="AllPages">
            <div className="Home">
                <h1>choose your therapy</h1>
                <table>
                    <tr>
                        <td><NavLink to="/positive"><img src={affirmationBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/meditation"><img src={mediationBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/gameword"><img src={gamesBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/chatbot"><img src={chatBtn} className="ImgBtn" /></NavLink></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Down;