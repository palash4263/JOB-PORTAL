import express, { application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';
import companyRoutes from './routes/company.route.js';
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js"

 //used for environment variables
dotenv.config({});
// Create an instance of an Express application
const app = express();
//middlware
//used to parse json bodies which helps in api requests
app.use(express.json())
//used to parse urlencoded bodies which helps in form submissions
app.use(express.urlencoded({ extended: true }));
//used to parse cookies which helps in authentication
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true, // Allow cookies to be sent
}
// Enable CORS with the specified options
app.use(cors(corsOptions));

 

const PORT = process.env.PORT || 8000;

// Use the user routes for any requests to /api/v1/user
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoutes);
app.use('/api/v1/job', jobRoute);
app.use("/api/v1/application", applicationRoute);

 

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});


