import { NextResponse } from 'next/server';
import Student from '@/models/Student';
import School from '@/models/School';
import bcrypt from 'bcrypt';
import connectDB from '@/utils/database';

export const POST = async (req) => {
  const body = await req.json();
  const {
    uniqueID, name, dob, regNo, password, dateOfEntry, guardianName, relationship, profilePicture,
    classOfEntry, hostelName, houseName, gender, email, guardianPhoneNumber1, guardianPhoneNumber2, address,
  } = body;

  if (!uniqueID || !name || !dob || !regNo || !password || !dateOfEntry || !guardianName ||
    !relationship || !classOfEntry || !gender || !email || !guardianPhoneNumber1 || !address) {
    return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 });
  }

  await connectDB();

  const school = await School.findOne({ uniqueID });
  if (!school) {
    return NextResponse.json({ error: 'School not found' }, { status: 404 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const student = new Student({
    uniqueID,
    name,
    dob,
    regNo,
    password: hashedPassword,
    dateOfEntry,
    guardianName,
    relationship,
    profilePicture,
    classOfEntry,
    hostelName,
    houseName,
    gender,
    email,
    guardianPhoneNumber1,
    guardianPhoneNumber2,  
    address,
    schoolID: school._id,
    schoolName: school.name,
  });

  try {
    await student.save();
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.log("Error creating student:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};

export const GET = async () => {
  await connectDB();

  try {
    const students = await Student.find().populate('schoolID');
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
