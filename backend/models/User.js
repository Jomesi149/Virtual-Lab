import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6
  },
  progress: {
    type: Map,
    of: Boolean,
    default: {}
  },
  completedLaws: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

// Convert _id to id when returning JSON
userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
  }
});

const User = mongoose.model('User', userSchema);

export default User;
