import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  title: String,
  description: String
}, { _id: false });

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
  category: {
    type: String,
    required: true,
    enum: ['interaction', 'cognitive', 'behavior', 'perception']
  },
  fullContent: {
    type: String,
    required: true
  },
  principles: {
    type: [String],
    default: []
  },
  examples: {
    type: [exampleSchema],
    default: []
  }
}, {
  timestamps: true
});

// Convert _id to id when returning JSON
uxLawSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

const UXLaw = mongoose.model('UXLaw', uxLawSchema);

export default UXLaw;
