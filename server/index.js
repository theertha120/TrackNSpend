const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authroutes');
const connRoutes = require('./routes/connectionRoutes');
const messageRoutes = require('./routes/messageRoutes');
const pendingRequestsRoutes = require('./routes/pendingRequests'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'artistically'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        throw err;
    }
    console.log('Connected to MySQL database');
});

app.use('/auth', authRoutes);
app.use('/messages', messageRoutes);
app.use('/connections', connRoutes);
app.use('/pending', pendingRequestsRoutes); // Use /pending instead of /pending-requests

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
