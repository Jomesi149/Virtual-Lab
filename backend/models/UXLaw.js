import mongoose from 'mongoose';

const uxLawSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fullContent: {
    type: String,
    required: true
  },
  examples: [{
    title: String,
    description: String
  }],
  principles: [{
    type: String
  }],
  category: {
    type: String,
    enum: ['cognitive', 'perception', 'interaction', 'behavior'],
    default: 'cognitive'
  },
  imageUrl: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const UXLaw = mongoose.model('UXLaw', uxLawSchema);

export default UXLaw;
