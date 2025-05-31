import mongoose from 'mongoose';

const userschema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const user = mongoose.model('User', userschema);

export default user;