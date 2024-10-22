import React , { useState } from 'react';
import '../../Assets/styles/styles.css'

const Contact = () => {

    // State Management

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    // Handle Input Change

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, like sending the data to a server
        console.log('Form Data Submitted:', formData);
        // Clear form after submission
        setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
        });
    };
    
    return (
        <>
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <p>Let’s Start a Conversation</p>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  );
};

export default Contact;