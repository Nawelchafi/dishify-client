import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./SignUpPage.css";

export default function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
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
            await axios.post("http://localhost:5005/api/auth/signup", formData);
            setSuccess("Signup successful! You can now log in.");
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
                theme: "none",
                size: "large",
                text: "sign_in_with",
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
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2 className="signup-title">Create Acount</h2>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <div className="inputs-container">
                    <div className="input-group">

                        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="input-group">

                        <input type="email" name="email" placeholder="Email Adress" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-group">

                        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>

                    <button type="submit" className="google-button" >
                        <div id="google-signin-btn"></div>
                    </button>

                </div>
            </form>
        </div>
    );
}
