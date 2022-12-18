import React, { useState } from 'react';
import './InfoPanel.css'

function Uris({close}){

    const [showPopup, setShowPopup] = useState(false);

    function handleButtonClick() {
    // Toggle the showPopup state when the button is clicked
    setShowPopup(!showPopup);
    }
    return(
        <div className="InfoPanel">
            <div className="grid-container-element">
                {/* <div className="top-left"> */}
                    <div className="grid-child-element">
                        <div className="panel-title">
                            Uris
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="top-right"> */}
                    <div className="grid-child-element">
                        <div className="button-right">
                            <button onClick={close}> X </button>
                        </div>
                    </div>
                {/* </div> */}
            </div>
                
            <div className="panel-address">
                New York, NY 10027
            </div>
            <div className="restrooms">
                Fl. 1 Women's Restroom | Pads and Tampons Available
                Fl. 3 Women's Restroom | Tampons Available
            </div>
            <div className="button-container">
                <button className="distance-button">
                    4 minutes away
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

export default Uris;