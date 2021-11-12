import React from 'react';
import mediationBtn from '../assets/mediation.png';
import affirmationBtn from '../assets/affirmation.png';
import gamesBtn from '../assets/games.png';
import walkBtn from '../assets/walk.png';
import breathingBtn from '../assets/breathing.png';
import chatBtn from '../assets/chatbot.png';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Stressed = () => {
    return (
        <div className="AllPages">
            <div className="Home">
                <h1>choose your therapy</h1>
                <table>
                    <tr>
                        <td><NavLink to="/breathing"><img src={breathingBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/gameword"><img src={gamesBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/park"><img src={walkBtn} className="ImgBtn" /></NavLink></td>
                        <td><NavLink to="/chatbot"><img src={chatBtn} className="ImgBtn" /></NavLink></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Stressed;