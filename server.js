const app = require('./app');
const connectDB = require('./config/db');

const PORT = 3012;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
