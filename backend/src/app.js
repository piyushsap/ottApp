import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import movieRoutes from './routes/movies.js';

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;
