import React, { useState, useEffect } from 'react';
import mediationBtn from '../assets/mediation.png';
import affirmationBtn from '../assets/affirmation.png';
import gamesBtn from '../assets/games.png';
import walkBtn from '../assets/walk.png';
import breathingBtn from '../assets/breathing.png';
import chatBtn from '../assets/chatbot.png';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Facial = () => {
    useEffect(() => {
        fetch('/api').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => console.log(data))
    }, [])
    return (
        <div>
        </div>
    );
}

export default Facial;