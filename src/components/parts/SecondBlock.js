import React from "react";


class SecondBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cardSecondBlock">
                <h2 className="titleSecondBlock">{this.props.titleSecondBlock === '' ? 'это первый мини-блок' : this.props.titleSecondBlock}</h2>
                <div className="textSecondBlock">{this.props.textSecondBlock === '' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' : this.props.textSecondBlock}</div>
                <div className="button">button</div>
            </div>
        );
    }
}

export default SecondBlock