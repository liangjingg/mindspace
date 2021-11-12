import React from 'react';
import './plainpages.css';
import { NavLink } from 'react-router-dom';

const Meditation = () => {
    return (
        <html>
            <div className="AllPages">
                <div className="pages">
                    <h1>Meditation by Goodful</h1>
                    <br />
                    <table>
                        <tr>
                            <td>
                    <h4>5-Minute Meditation You Can Do Anywhere</h4>
                                <iframe width="630" height="350" src="https://www.youtube.com/embed/inpok4MKVLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </td>
                            <td>
                    <h4>10-Minute Meditation For Beginners</h4>
                                <iframe width="630" height="350" src="https://www.youtube.com/embed/U9YKY7fdwyg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </td>
                        </tr>
                        <tr>
                            <td>
                    <div className="spacing" />
                    <h4>15-Minute Meditation For Self Love</h4>
                                <iframe width="630" height="350" src="https://www.youtube.com/embed/itZMM5gCboo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </td>
                        </tr>
                        </table>
                </div>
            </div>
        </html>
    );
}

export default Meditation;