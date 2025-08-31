import express from 'express';
import healthRoutes from './routes/health.routes.js';

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/health', healthRoutes);

export default app;
