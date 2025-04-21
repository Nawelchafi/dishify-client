import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import "./LogInPage.css"
function LogInPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post("http://localhost:5005/api/auth/login", formData);
            setSuccess("Login successful!");
            localStorage.setItem("token", response.data.authToken);
            const jwtTocken = localStorage.getItem("token")
            console.log(jwtTocken)

        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };
    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID; //  Google Client ID
    useEffect(() => {

        window.google?.accounts.id.initialize({ //google object created from the script of gsi used in html 
            client_id: CLIENT_ID,
            callback: handleGoogleResponse,
        });

        window.google?.accounts.id.renderButton(
            document.getElementById("google-signin-btn"),
            {
                theme: "outline",
                size: "large",
                text: "continue_with",
                shape: "pill",

            }
        );
    });
    const handleGoogleResponse = async (response) => {
        const token = response.credential;

        try {
            const res = await axios.post("http://localhost:5005/api/auth/google", {
                token,
            });

            // Save token if you want
            localStorage.setItem("authTokenFrom Google", res.data.token);
            setSuccess("Google signup successful!");
        } catch (error) {
            console.error(error);
            setError("Google signup failed.");
        }
    };


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title">login</h2>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <div className="inputs-container">
                    <div className="input-group">

                        <input type="email" name="email" placeholder="Email Adress" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-group">

                        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="login-button">login</button>
                    <button type="submit" className="google-button" >
                        <div id="google-signin-btn"></div>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LogInPage