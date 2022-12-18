import React, { useState } from 'react';
import './InfoPanel.css'

function Schapiro({close}){


    return(
        <div className="InfoPanel" onClick={close}>
            <div className="panel-title">
                Schapiro
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
            
        </div>
    );
}

export default Schapiro;