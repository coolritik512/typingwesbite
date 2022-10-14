import React from "react";
import logo from './logo.png'
function navbar() {
    return (
        <React.Fragment>
            <div className="gridfortop">
                <div className="gridforlogoandsign">
                    <div id="logo">
                        <img src={logo} alt="BigCo Inc. logo" />
                    </div>
                    <div id="name">TYPEFAST</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default navbar;