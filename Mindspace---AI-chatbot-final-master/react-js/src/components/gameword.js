import React from 'react';
import {Button} from 'react-bootstrap';
import './plainpages.css';
import { NavLink } from 'react-router-dom';

//chrome do not support opening webgl straight, hence it has to be from a local host
//step 1: open unity -> build & run
//step 2: wait for it to host on local host
//step 3: open the page

const gameword = () => {
    return (
        <html>
            <div className="AllPages">
                <table>
                    <tr>
                        <td><NavLink to="/games"><Button variant="info" type="button">Word search</Button></NavLink></td>
                        <td><NavLink to="/gamelight"><Button variant="info" type="button">Lights off</Button></NavLink></td>
                        <td><NavLink to="/Hangman"><Button variant="info" type="button">Guess the emotion</Button></NavLink></td>

                    </tr>
                </table>
             <div className="pages">
                    <h3>word search</h3>
                    <p className="gameDesc">This is a word search puzzle that includes positive wordings into the
                        puzzle. By playing the puzzle, you will learn more positive wordings to add into your
                        affirmation, bringing positive light into your life. Have fun !</p>
                    <br/>
                    <iframe src="http://localhost:50357/" height="420px" width="570px"></iframe>
                </div>
            </div>
        </html>
    );
}

export default gameword;