import React from "react";
import NavMenu from "./NavMenu";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <header className="header">
                <div className="headerText">{this.props.titleName === '' ? 'Заголовок.' : this.props.titleName}</div>
                <NavMenu />
            </header>
        );
    }
}

export default Header