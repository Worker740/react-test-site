import React from "react";

class WelcomeBlock extends React.Component {
    render() {
        return (
            <div className="welcomeBlock">
                <div className="welcomeBlockLeft">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                <div className="welcomeBlockRight">
                    <img src="./strategy-development 1.png"></img>

                </div>
            </div>
        )
    }
}

export default WelcomeBlock