const { default: mongoose } = require('mongoose');
const dbConnect = () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGODB_URL);
    console.log('DB connected successfully');
  } catch (error) {
    console.log('db error');
  }
};

module.exports = dbConnect;
