import React from "react";

class FirstBlock extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let className = 'cardFirstBlock';
        if (this.props.textOnRight == 'On') {
            className += ' cardFirstBlockOnRight'
        }
        return (
            <div className={className}>
                <h2 className="titleFirstBlock">{this.props.titleName === '' ? 'Это заголовок блока с текстом' : this.props.titleName}</h2>
                <span className="textFirstBlock">{this.props.text === '' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' : this.props.text}</span>
            </div>
        );
    }
}

export default FirstBlock