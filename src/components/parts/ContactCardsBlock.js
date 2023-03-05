import React from "react";

class ContactCardsBlock extends React.Component {
    render() {
        return (
            <div className="contactCardsBlock">
                <div>
                    <img src="./adress.png"></img>
                    <h3>Our Office</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
                <div>
                    <img src="./phone.png"></img>
                    <h3>Phone Number</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
                <div>
                    <img src="./telegram.png"></img>
                    <h3>Telegram</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
                <div>
                    <img src="./email.png"></img>
                    <h3>Email</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
            </div>
        )
    }
}

export default ContactCardsBlock