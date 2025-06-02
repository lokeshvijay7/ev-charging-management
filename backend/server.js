import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js'; 
import chargerRoutes from './routes/charger.routes.js';
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chargers', chargerRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
}
);
export default app;
