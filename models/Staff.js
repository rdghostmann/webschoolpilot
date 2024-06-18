import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true 
  },
  phoneNumber: { 
    type: String, 
    required: true,
    match: [/^\d{10,15}$/, "Please fill a valid phone number"]
  },
  dateOfEmployment: { 
    type: Date, 
    required: true 
  },
  profilePicture: { 
    type: String 
  },
  role: { 
    type: String, 
    default: "Staff" 
  },
  classAssigned: { 
    type: String 
  },
  subjectAssigned: { 
    type: String 
  },
  isFormTeacher: { 
    type: Boolean, 
    default: false 
  },
  staffID: { 
    type: String, 
    required: true, 
    unique: true 
  },
  gender: { 
    type: String, 
    required: true,
    enum: ["male", "female", "other"]
  },
  dob: { 
    type: Date, 
    required: true 
  },
  qualification: { 
    type: String, 
    required: true 
  },
  experience: { 
    type: String 
  },
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  password: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  city: { 
    type: String, 
    required: true 
  },
  state: { 
    type: String, 
    required: true 
  },
  zipCode: { 
    type: String, 
    required: true 
  },
  country: { 
    type: String, 
    required: true 
  },
  schoolID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

export default mongoose.models.Staff || mongoose.model("Staff", StaffSchema);
