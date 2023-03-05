import React from "react";
import NavMenu from "./NavMenu";

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="footerLeft">
                    <div className="foterText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <NavMenu />
            </footer>
        );
    }
}

export default Footer