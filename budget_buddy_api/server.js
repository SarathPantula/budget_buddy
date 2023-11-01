const express = require('express');
const avatarTypeRoutes = require('./routes/avatarTypeRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Use routes
app.use('/users', userRoutes);
app.use('/avatar-type', avatarTypeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});