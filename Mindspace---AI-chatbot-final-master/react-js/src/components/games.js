import React from 'react';
import './meditation.css';
import { NavLink } from 'react-router-dom';

//chrome do not support opening webgl straight, hence it has to be from a local host
//step 1: open unity -> build & run
//step 2: wait for it to host on local host
//step 3: open the page

//if not, should work <iframe src="index.html" height="420px" width="570px"></iframe>

const games = () => {
    return (
        <html>
            <div className="meditation">
                <h1>word search</h1>
                <iframe src="http://localhost:50931/" height="420px" width="570px"></iframe>

            </div>
        </html>
    );
}

export default games;