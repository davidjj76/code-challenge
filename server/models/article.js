import mongoose from 'mongoose';

export default mongoose.model('Article', {
  author: String,
  content: String,
  excerpt: String,
  published: Boolean,
  tags: [String],
  title: String,
});
