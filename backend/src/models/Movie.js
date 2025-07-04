import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Movie', movieSchema);
