import React from 'react';
import './park.css';
import marsilingpark from '../assets/marsilingpark.jpg'; 
import woodlandstownpark from '../assets/woodlandstownpark.jpg'; 
import admiraltypark from '../assets/admiraltypark.jpg'; 
import woodlandswaterfront from '../assets/woodlandswaterfront.jpg'; 
import stagmontpark from '../assets/stagmontpark.jpg'; 
import sembawangpark from '../assets/sembawangpark.jpg'; 
import cckpark from '../assets/cckpark.jpg'; 
import Sungei from '../assets/Sungei.jpg';
import { NavLink } from 'react-router-dom';

const park = () => {
    return (
        <html>
            <div className="AllPages">
            <div className="park">
                <h1>Go for a walk</h1>
                <div className="parkGrid">
                    <table>
                        <tr>
                            <td>
                                <a href="https://www.google.com/maps/place/Woodlands+Town+Park+East/@1.4366405,103.7704901,15z/data=!3m1!4b1!4m5!3m4!1s0x31da13ab0a57089f:0x4fcf3866b360cbf7!8m2!3d1.4366405!4d103.7792449">
                                    <img src={woodlandstownpark} className="Img" />
                                </a>
                                <p>
                                    Woodlands town park <br />    
                                </p> 
                            </td>
                            <td>
                                <img src={marsilingpark} className="Img" />
                                <p>
                                    Marsiling park <br />
                                </p>
                            </td>
                            <td>
                                <img src={admiraltypark} className="Img" />
                                <p>
                                    Admiralty Park <br />
                                </p>
                            </td>
                            <td>
                                <img src={woodlandswaterfront} className="Img" />
                                <p>
                                    Woodlands waterfont Park <br />
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <img src={stagmontpark} className="Img" />
                                <p>
                                    Stagmont park <br />
                                </p>
                            </td>
                            <td>
                                <img src={sembawangpark} className="Img" />
                                <p>
                                    Sembawang Park <br />
                                </p>
                            </td>
                            <td>
                                <img src={cckpark} className="Img" />
                                <p>
                                    Choa Chu Kang Park <br />
                                </p>
                            </td>
                            <td>
                                <img src={Sungei} className="Img" />
                                <p>
                                    Sungei Buloh Wetland Reserve<br />
                                </p>
                            </td>
                        </tr>
                    </table>
                  </div>
                </div>
            </div>
        </html>
    );
}

export default park;