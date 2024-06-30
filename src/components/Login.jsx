import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            

            setMessage("Login Successful");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error('Error:', error);
            setMessage("Login Failed, please enter a valid email and password");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="login-input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="login-input"
                />
                <center>
                <button type="submit" className="login-button">Login</button>
                </center>
                <h3 className="login-message">{message}</h3>
            </form>
        </div>
    );
};

export default Login;
