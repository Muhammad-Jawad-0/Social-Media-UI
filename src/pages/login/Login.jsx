import "./login.css"

function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">JawadSocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on Lamasocial.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" placeholder="Email" className="loginInput" />
                    <input type="password" placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">forgot password?</span>
                    <button className="loginRegisterButton">Create a new Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
