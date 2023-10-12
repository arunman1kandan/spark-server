const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const messages = [];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
    const { username,profilePicUrl , message , timestamp , date } = req.body;
    const newMessage = { username, message, profilePicUrl , timestamp , date}; // Include the profilePicUrl in the message object
    messages.push(newMessage);
    res.json({ success: true });
  });
  

app.listen(port , () => {
  console.log(`Server is running on port ${port}`);
});
