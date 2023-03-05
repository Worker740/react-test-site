import React from "react";

import WelcomeBlock from "./parts/WelcomeBlock";
import ContactCardsBlock from "./parts/ContactCardsBlock";
import ContactFormBlock from "./parts/ContactFormBlock";

class ContactPage extends React.Component {
    render() {
        return (
            <section>
                <WelcomeBlock />
                <ContactCardsBlock />
                <ContactFormBlock />
            </section>
        )
    }
}

export default ContactPage