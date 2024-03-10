const express = require('express');
const otpService = require('./otpService');

const app = express();
app.use(express.json());

// Endpoint to send OTP
app.post('/api/send-otp', async (req, res) => {
  const { phone } = req.body;
  try {
    // Generate OTP
    const otp = otpService.generateOTP();
    
    // Send OTP to the provided phone number
    await otpService.sendOTP(phone, otp);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// Endpoint to validate OTP
app.post('/api/validate-otp', async (req, res) => {
  const { otp } = req.body;
  try {
    // Validate OTP
    const isValid = otpService.validateOTP(otp);

    if (isValid) {
      res.status(200).json({ message: 'OTP validation successful' });
    } else {
      res.status(400).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error validating OTP:', error);
    res.status(500).json({ error: 'Failed to validate OTP' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
