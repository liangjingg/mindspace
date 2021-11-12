import React from 'react';
import './plainpages.css';
import { NavLink } from 'react-router-dom';

const Breathing = () => {
    return (
        <html>
            <div className="AllPages">
                <div className="pages">
                    <h1>Breathing excercise by Goodful</h1>
                    <br />
                    <table>
                        <tr>
                            <td>
                    <h4>Calming Breathing Exercise</h4>
                    <iframe width="630" height="350" src="https://www.youtube.com/embed/olxThtkDVUo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </td>
                            <td>
                    <h4>Breathing Techniques For Stress Relief</h4>
                    <iframe width="630" height="350" src="https://www.youtube.com/embed/rVSUsuieT0Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </html>
    );
}

export default Breathing;