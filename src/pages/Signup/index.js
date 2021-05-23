import React from 'react'
import "./style.css"

const Signup = () => {
    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input placeholder="email" type="email"/>
                <input placeholder="password" type="password"/>
                <button type="submit">Sign In</button>

                <h4>
                    <span className="signup__gray">New to MovieApp? </span>
                    <span className="signup__link"> Sign Up now.</span>
                    </h4>
            </form>
        </div>
    )
}

export default Signup
