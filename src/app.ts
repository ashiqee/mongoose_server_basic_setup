import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//parsers

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

///api/v1/students/create-student

//application route
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hi THIS NEXT LEVEL SERVER');
};

app.get('/', getAController);

export default app;
