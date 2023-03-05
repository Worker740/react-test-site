import React from "react";

class ContactFormBlock extends React.Component {
    render() {
        return (
            <div className="contactFormContainer">
                <div className="contactFormBlock">
                    <h2>
                        Contact Us
                    </h2>
                    <input type={"text"} placeholder="Enter your Name"></input>
                    <input type={"email"} placeholder="Enter your Email adress"></input>
                    <input className="contactFormText" type={"textarea"}></input>
                    <div className="button">Send</div>
                </div>
            </div>

        )
    }
}

export default ContactFormBlock