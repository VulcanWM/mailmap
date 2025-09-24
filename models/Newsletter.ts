import mongoose from 'mongoose'

const NewsletterSchema = new mongoose.Schema({
    name: String,
    shortDescription: String,
    longDescription: String,
    frequency: String,
    submittedAt: Date,
    approvedAt: Date,
    approved: Boolean,
    url: String,
    category: String,
    tags: [String],
    thumbnailUrl: String,
    subjectLine: String
})

export default mongoose.models.Newsletter || mongoose.model('Newsletter', NewsletterSchema);