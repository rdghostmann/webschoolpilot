import { NextResponse } from 'next/server';
import connectDB from '@/utils/database';
import { generatePrefix } from '@/utils/generateUniqueID';
import School from '@/models/School';
import bcrypt from 'bcrypt';

export const POST = async (req) => {
 
    const body = await req.json();
    const {
      name, state, localGovernment, city, address, gradeType, genderType,
      ownershipType, enrollmentType, religion, mission, phoneNumber, email, password,
    } = body;

    console.log('Request Body:', body);

    if (!name || !state || !localGovernment || !city || !address || !gradeType ||
      !genderType || !ownershipType || !religion || !mission || !enrollmentType || !phoneNumber ||
      !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await connectDB();
    const existingSchool = await School.findOne({ email });
    if (existingSchool) {
      return NextResponse.json({ error: 'School with this email already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 7);
    const uniqueID = `${generatePrefix(name)}-${Math.random().toString(36).slice(2, 11).toUpperCase()}`;

    const newSchool = new School({
      name,
      state,
      localGovernment,
      city,
      address,
      gradeType,
      genderType,
      ownershipType,
      enrollmentType,
      religion,
      mission,
      phoneNumber,
      email,
      password: hashedPassword,
      uniqueID,
    });
    try {
    await newSchool.save();
    return NextResponse.json({ success: true, school: newSchool }, { status: 201 });
  } catch (error) {
    console.error('Error registering school:', error);
    return NextResponse.json({ error: 'An error occurred while registering the school' }, { status: 500 });
  }
};
