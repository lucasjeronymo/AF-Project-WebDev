import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Hero', HeroSchema);
