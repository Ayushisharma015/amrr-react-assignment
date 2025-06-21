import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  coverImage: String,
  additionalImages: [String]
}, { timestamps: true });

export default mongoose.model('Item', itemSchema);
