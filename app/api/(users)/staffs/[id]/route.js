import { NextResponse } from 'next/server';
import Student from '@/models/Student';
import bcrypt from 'bcrypt';
import connectDB from '@/app/lib/database';
import Staff from '@/models/Staff';

export const GET = async () => {
    try {
      await connectDB();
      const staffs = await Staff.find().populate('schoolID');
      return NextResponse.json({ staffs }, { status: 200 });
    } catch (error) {
      console.error('Error fetching staffs:', error);
      return NextResponse.json({ error: 'An error occurred while fetching staffs' }, { status: 500 });
    }
  };
  
  // Example PUT and DELETE handlers (not included in the original request)
  
  // PUT /api/staffs/[id]
  export const PUT_ID = async (req) => {
    // Implement according to your specific requirements
  };
  
  // DELETE /api/staffs/[id]
  export const DELETE_ID = async (req) => {
    // Implement according to your specific requirements
  };