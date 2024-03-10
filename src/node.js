const express = require('express');
const app = express();

// Example route handler
app.get('/api/data', (req, res) => {
    // Assume data is fetched from some source
    const data = '{"key": "value"'; // Incomplete JSON data for demonstration
    
    try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
