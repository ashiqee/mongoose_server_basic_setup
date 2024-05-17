import { Request, Response } from 'express';
import { StudentServeices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    //will cal service func to send this data

    const result = await StudentServeices.createStudentIntoDB(student);

    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get students data

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServeices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServeices.getSingleStudentsFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrived succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
