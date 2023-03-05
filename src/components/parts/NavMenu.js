import React from "react";
import { Link } from 'react-router-dom'

class NavMenu extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
                <nav className="navMenu">
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div>
                        <Link to='/about'>About</Link>
                    </div>
                    <div>
                        <Link to='/contacts'>Contact</Link>
                    </div>
                    <div>
                        <Link to='/signIn'>Sign in</Link>
                    </div>
                </nav>
        );
    }
}

export default NavMenu