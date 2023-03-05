import React from "react";
import SecondBlock from "./parts/SecondBlock";
import WelcomeBlock from "./parts/WelcomeBlock";
import ActionBlock from "./parts/ActionBlock";

class HomePage extends React.Component {
    render() {
        return (
            <section>
                <WelcomeBlock />
                <ActionBlock />
                <div className="containerSecondBlock">
                    <SecondBlock titleSecondBlock='Lorem ipsum ' textSecondBlock='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                    <SecondBlock titleSecondBlock='Lorem ipsum ' textSecondBlock='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                    <SecondBlock titleSecondBlock='Lorem ipsum ' textSecondBlock='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </div>
            </section>
        )
    }
}

export default HomePage