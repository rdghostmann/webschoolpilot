import { NextResponse } from 'next/server';
import Staff from '@/models/Staff';
import School from '@/models/School';
import bcrypt from 'bcrypt';
import connectDB from '@/app/lib/database';

export const POST = async (req) => {

  const body = await req.json();
  const {
    fullName, phoneNumber, dateOfEmployment, profilePicture, role, classAssigned, subjectAssigned, 
    isFormTeacher, staffID, gender, dob, qualification, experience, username, email, password, 
    address, city, state, zipCode, country, uniqueID
  } = body;

  if (!fullName || !phoneNumber || !dateOfEmployment || !profilePicture || !role || !gender || !dob || 
      !qualification || !username || !email || !password || !address || !city || !state || !zipCode || !country || !uniqueID) {
    return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 });
  }

  await connectDB();

  const school = await School.findOne({ uniqueID });
  if (!school) {
    return NextResponse.json({ error: 'School not found' }, { status: 404 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const staff = new Staff({
    fullName,
    phoneNumber,
    dateOfEmployment,
    profilePicture,
    role,
    classAssigned,
    subjectAssigned,
    isFormTeacher,
    staffID,
    gender,
    dob,
    qualification,
    experience,
    username,
    email,
    password: hashedPassword,
    address,
    city,
    state,
    zipCode,
    country,
    schoolID: school._id,
    schoolName: school.name
  });

  try {
    await staff.save();
    return NextResponse.json(staff, { message: 'Staff was created successfully' }, { status: 201 });
  } catch (error) {
    console.log("Error creating Staff");
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};

export const GET = async () => {
  await connectDB();

  try {
    const staffs = await Staff.find().populate('schoolID');
    return NextResponse.json(staffs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
