import mongoose from 'mongoose';

const SchoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    localGovernment: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    gradeType: {
        type: String,
        required: true,
        enum: ['Creche/Nursery', 'Primary', 'Secondary', 'Tertiary'],
    },
    genderType: {
        type: String,
        required: true,
        enum: ['only boys', 'only girls', 'boys and girls'],
    },
    ownershipType: {
        type: String,
        required: true,
        enum: ['private', 'government', 'mission'],
    },
    enrollmentType: {
        type: String,
        required: true,
        enum: ['only day', 'only boarders', 'day and boarders'],
    },
    mission: {
        type: String,
        enum: ['Catholic', 'Anglican', 'Pentecostal', 'Sabbath', 'Islam'],
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10,15}$/, 'Please fill a valid phone number'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Admin",
    },
    uniqueID: {
        type: String,
        required: true,
        unique: true,
    },

}, { timestamps: true });

export default mongoose.models.School || mongoose.model('School', SchoolSchema);