import React from "react";
import FirstBlock from "./parts/FirstBlock";
import SecondBlock from "./parts/SecondBlock";
import WelcomeBlock from "./parts/WelcomeBlock";

class AboutPage extends React.Component {
    render() {
        return (
            <section>
                <WelcomeBlock />
                <div className="containerFirstBlock">
                    <FirstBlock titleName='Lorem ipsum dolor sit amet' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                    <FirstBlock textOnRight='On' titleName='Lorem ipsum dolor sit amet' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </div>
                <div className="containerSecondBlock">
                    <SecondBlock titleSecondBlock='' textSecondBlock='' />
                    <SecondBlock titleSecondBlock='это второй мини-блок' textSecondBlock='' />
                    <SecondBlock titleSecondBlock='это третий мини-блок' textSecondBlock='' />
                </div>
            </section>
        )
    }
}

export default AboutPage