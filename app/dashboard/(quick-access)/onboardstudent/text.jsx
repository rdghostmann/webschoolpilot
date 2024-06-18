import connectDB from '@/app/lib/database';
import { generateUniqueID } from '@/app/lib/generateUniqueID';
import School from '@/models/School';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

// GET /api/schools
export const GET = async () => {
  try {
    await connectDB();
    const schools = await School.find();
    return NextResponse.json({ schools }, { status: 200 });
  } catch (error) {
    console.error('Error fetching schools:', error);
    return NextResponse.json({ error: 'An error occurred while fetching schools' }, { status: 500 });
  }
};

// GET /api/schools/[id]
export const GET_ID = async (req) => {
  const { id } = req.params;

  try {
    await connectDB();
    const school = await School.findById(id);

    if (!school) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 });
    }

    return NextResponse.json({ school }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching school with id ${id}:`, error);
    return NextResponse.json({ error: 'An error occurred while fetching the school' }, { status: 500 });
  }
};

// POST /api/schools
export const POST = async (req) => {
  const body = await req.json();
  const {
    name, state, localGovernment, city, address, gradeType, genderType,
    ownershipType, enrollmentType, religion, mission, phoneNumber, email, password,
  } = body;

  if (!name || !state || !localGovernment || !city || !address || !gradeType ||
    !genderType || !ownershipType || !religion || !mission || !enrollmentType || !phoneNumber ||
    !email || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    await connectDB();

    const existingSchool = await School.findOne({ email });
    if (existingSchool) {
      return NextResponse.json({ error: 'School with this email already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 7);
    const uniqueID = generateUniqueID(name);

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

    await newSchool.save();
    return NextResponse.json({ success: true, school: newSchool }, { status: 201 });
  } catch (error) {
    console.error('Error registering school:', error);
    return NextResponse.json({ error: 'An error occurred while registering the school' }, { status: 500 });
  }
};

// PUT /api/schools/[id]
export const PUT_ID = async (req) => {
  const { id } = req.params;
  const body = await req.json();

  try {
    await connectDB();
    const school = await School.findByIdAndUpdate(id, body, { new: true });

    if (!school) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, school }, { status: 200 });
  } catch (error) {
    console.error(`Error updating school with id ${id}:`, error);
    return NextResponse.json({ error: 'An error occurred while updating the school' }, { status: 500 });
  }
};

// DELETE /api/schools/[id]
export const DELETE_ID = async (req) => {
  const { id } = req.params;

  try {
    await connectDB();
    const school = await School.findByIdAndDelete(id);

    if (!school) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'School deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error(`Error deleting school with id ${id}:`, error);
    return NextResponse.json({ error: 'An error occurred while deleting the school' }, { status: 500 });
  }
};
