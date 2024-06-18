import connectDB from '@/lib/database';
import School from '@/models/School';
import { NextResponse } from 'next/server';

export const PUT = async (req) => {
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
  
  export const DELETE = async (req) => {
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