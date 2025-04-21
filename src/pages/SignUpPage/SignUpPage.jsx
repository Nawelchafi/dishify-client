import { useState } from "react";
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
            const response = await axios.post("http://localhost:5005/api/auth/signup", formData);
            setSuccess("Signup successful! You can now log in.");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
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

                </div>
            </form>
        </div>
    );
}
