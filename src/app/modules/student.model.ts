import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required:[ true,'firstName is required'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [ true,'lastName is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String ,required:true, unique:true},
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum:{ 
        values:['male', 'female'],
        message: " {VALUE} is not valid - The gender field can only be one of the following: 'male','female'.",
    },
    required: true,
  },
  dob: { type: String },
  email: { type: String, required: true , unique:true},
  contactNo: { type: String, required: true,  unique:true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'AB+', 'AB-', 'O+', 'O-', 'B+', 'B-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
