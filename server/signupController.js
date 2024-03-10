// signupController.js

const  Admin  = require('./adminModel');
const Voter = require('./voterModel')

async function signup(req, res) {
    try {
        // Extract user data from the request body
        const { type, name, securityCode, voterName, voterId, email, phone, password, otp } = req.body;

        // Create a new user document based on the type
        let newUser;
        if (type === 'admin') {
            newUser = new Admin({ name, securityCode, email, phone });
        } else if (type === 'voter') {
            newUser = new Voter({ voterName, voterId, email, phone, password });
        } else {
            return res.status(400).json({ error: 'Invalid user type' });
        }

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Failed to sign up' });
    }
}

module.exports = { signup };
