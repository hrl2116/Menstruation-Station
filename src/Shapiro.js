import React, { useState } from 'react';
import './InfoPanel.css'

function Shapiro(){

    const [showPopup, setShowPopup] = useState(false);

    function handleButtonClick() {
    // Toggle the showPopup state when the button is clicked
    setShowPopup(!showPopup);
    }
    return(
        <div className="InfoPanel">
            <div className="panel-title">
                Shapiro
            </div>
            <div className="panel-address">
                New York, NY 10027
            </div>
            <div className="restrooms">
                Fl. 5 Women's Restroom | Pads and Tampons Available
                Fl. 3 Women's Restroom | Pads and Tampons Available
            </div>
            <div className="button-container">
                <button className="distance-button">
                    3 minutes away
                </button>
            </div>
            <div className="button-container">
                <button onClick={handleButtonClick} className="out-tampon-button">
                   Report out of tampons
                </button>
                <button onClick={handleButtonClick} className="out-pad-button">
                    Report out of pads
                </button>
            </div>
            {showPopup && (
                <div className="popup">
                    <h3>Thanks for your report! </h3>
                    <p>Facilities has been notified and will restock this station as soon as possible</p>
                    <button onClick={handleButtonClick}>x</button>
                </div>
            )}
            
        </div>
    );
}

export default Shapiro;