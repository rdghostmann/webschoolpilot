import { NextResponse } from 'next/server';

import Staff from '@/models/Staff';
import connectDB from '@/utils/database';

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
  
  
  export const PUT = async (req) => {
  };
  


  export const DELETE = async (req) => {
  };