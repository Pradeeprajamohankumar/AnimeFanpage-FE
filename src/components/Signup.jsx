import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [conpass, setConPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pass !== conpass) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('https://animefanpage-be.onrender.com/signup', {
                first_name: fname,
                last_name: lname,
                email: email,
                password: pass
            });
            console.log(response.data);
            alert('Form submitted successfully!');
            setError('');
            setFname('');
            setLname('');
            setEmail('');
            setPassword('');
            setConPass('');
            navigate('/login'); // Navigate to the login page
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Error:', error.response.data);
                setError(error.response.data.error || 'Failed to submit form');
            } else {
                console.error('Error:', error.message);
                setError('Failed to submit form');
            }
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="signup-input"
                    value={fname}
                    placeholder="First Name"
                    onChange={(e) => setFname(e.target.value)}
                />
                <input
                    type="text"
                    className="signup-input"
                    value={lname}
                    placeholder="Last Name"
                    onChange={(e) => setLname(e.target.value)}
                />
                <input
                    type="email"
                    className="signup-input"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="signup-input"
                    value={pass}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    className="signup-input"
                    value={conpass}
                    placeholder="Confirm Password"
                    onChange={(e) => setConPass(e.target.value)}
                />
                {error && <p className="signup-error">{error}</p>}
                <center>
                    <button type="submit" className="signup-button">Sign Up</button>
                </center>
            </form>
        </div>
    );
};

export default Signup;
