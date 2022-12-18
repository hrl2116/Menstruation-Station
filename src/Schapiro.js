import React, { useState } from 'react';
import './InfoPanel.css'

function Schapiro({close}){

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
                            Schapiro
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
                    <div className="popup-container-element">
                        <div className="grid-child-element">
                            <h3>Thanks for your report! </h3>
                        </div>
                        <div className="grid-child-element">
                            <div className="button-right">
                                <button onClick={handleButtonClick}> X </button>
                            </div>
                        </div>
                    </div>

                    <p>Facilities has been notified and will restock this station as soon as possible</p>
                    
                </div>
            )}
            
        </div>
    );
}

export default Schapiro;