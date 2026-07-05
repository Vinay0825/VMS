require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // note: config/db not just ./db
const auth = require('./middleware/auth');
const role = require('./middleware/role');
const app = express();

connectDB(); 

app.use(express.json()); // lets Express parse JSON request bodies
app.use('/api/auth', require('./routes/auth'));

app.use('/api/visitors', require('./routes/visitor'));

app.get('/', (req, res) => {
  res.json({ message: "VMS server running" });
});

app.get('/api/test', auth, role('admin'), (req, res) => {
  res.json({ message: 'Admin access confirmed', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});