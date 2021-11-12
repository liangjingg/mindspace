import React from 'react';
import './positive.css';
import imptIcon from '../assets/impt.png';
import loveIcon from '../assets/love.png';
import { NavLink } from 'react-router-dom';

const PositiveAffirmation = () => {
    return (
        <div className="AllPages">
            <div className="positive">
                <h1>Positive Affirmations</h1>
                <div className="positiveDesc">
                    <p>Positive affirmations are very powerful because they release
                            you from negativity, fear, worry, and anxiety. When these
                            affirmations are repeated over and over again, they begin
                            to take charge of your thoughts, slowly changing your
                        pattern of thinking and ultimately changing your life.</p>
                </div>
                <div className="whiteBox">
                <h1 className="heading"> Speak into existence! </h1>
                <br/>
                <div class="row">
                    <div class="column">
                            <div class="card">You are important and you matter!</div>
                    </div>
                    <div class="column">
                            <div class="card">You are so loved</div>
                    </div>
                    <div class="column">
                            <div class="card">Your mistakes don't define you</div>
                    </div>
                    <div class="column">
                            <div class="card">Your needs and wants are valid</div>
                    </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="column">
                            <div class="card">It is okay to ask for help</div>
                        </div>
                        <div class="column">
                            <div class="card">Your boundaries are important and worth respect</div>
                        </div>
                        <div class="column">
                            <div class="card">You attract beautiful things in life</div>
                        </div>
                        <div class="column">
                            <div class="card">You are enough</div>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="column">
                            <div class="card">Today is going to be incredibl</div>
                        </div>
                        <div class="column">
                            <div class="card">You are going to heal</div>
                        </div>
                        <div class="column">
                            <div class="card">You can do this</div>
                        </div>
                        <div class="column">
                            <div class="card">You worthy of your dreams</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PositiveAffirmation;