import React, {useState, useEffect} from 'react';
import mediationBtn from '../assets/mediation.png';
import affirmationBtn from '../assets/affirmation.png';
import gamesBtn from '../assets/games.png';
import walkBtn from '../assets/walk.png';
import featuresIcon from '../assets/gameIcon.png';
import chatIcon from '../assets/bot.png';
import banner from '../assets/banner.png';
import './Home.css';
import { NavLink } from 'react-router-dom';





const General2 = () => {


    return (
        <div className="general2">
        <div className="general2Container">
            <img src={banner} className="banner" />
            <div class="centered">
                <h1>Mindspace</h1>
                <p> Emotional and mental health is important because it's a vital part of your life 
                    and impacts your thoughts, behaviors and emotions. Being healthy emotionally can promote productivity 
                    and effectiveness in activities like work, school or caregiving.</p>
                    <NavLink to="/facial"><button type="button" className="chatBotBtn">Come and try our emotion detector {">"}</button></NavLink>
            </div>
        </div>
        <br/><br/>
            <h2> Our features </h2>
        <br />
        <table className="features">
            <tr>
                <td className="chatbottd">
                    <h3> Chatbot </h3>
                        <NavLink to="/chatbot"><img src={chatIcon} className="icon" /></NavLink>
                        <br />
                        <p className="chatbotDesc">Today, as the need for mental health services continues to surpass availability, people in distress can reach out
                            online to mental health chatbots, like chatty! </p>
                        <NavLink to="/chatbot"><button type="button" className="chatBotBtn">Come chat with our chatbot {">"}</button></NavLink>
                </td>
                <td className="featuretd">
                    <h3> Mental Health Tools! </h3>
                    <img src={featuresIcon} className="smallIcon" />
                    <br />
                    <ul className="otherfeatures">
                            <NavLink to="/gameword" className="featureLinks"><li>Word Search Puzzle</li></NavLink>
                            <NavLink to="/gamelight" className="featureLinks"><li>Lights Out</li></NavLink>
                            <NavLink to="/Hangman" className="featureLinks"><li>Learn Different Emotions</li></NavLink>
                            <NavLink to="/meditation" className="featureLinks"><li>Meditation Routine</li></NavLink>
                            <NavLink to="/breathing" className="featureLinks"><li>Breathing Exercise</li></NavLink>
                            <NavLink to="/positive" className="featureLinks"><li>Positive Affirmations</li></NavLink>
                            <NavLink to="/park" className="featureLinks"><li>Suggestion of Parks Near You</li></NavLink>
                    </ul>
                </td>
            </tr>
        </table>
        </div>
    );
}

export default General2;
