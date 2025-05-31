import mongoose from 'mongoose';

const userschema = new mongoess.mongoess({

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