import React from "react";

class LoginBlock extends React.Component {
    render() {
        return (
            <div className="loginBlockContainer">
                <div className="loginBlock">
                    <h2>Login</h2>
                    <input type={"phone email"} placeholder="email or phone number"></input>
                    <input type={"password"} placeholder="password"></input>
                    <div className="button">login</div>
                    <span>Sign up with</span>
                    <div className="loginBlockContainerSocial">
                        <div>
                            <a href="https://facebook.com/" target={'_blank'}><img src="./facebook.png"></img></a>
                        </div>
                        <div>
                            <a href="https://google.com/" target={'_blank'}><img src="./google.png"></img></a>
                        </div>
                        <div>
                            <a href="https://vk.com/" target={'_blank'}><img src="./vk.png"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginBlock