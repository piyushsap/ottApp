import express from 'express';
import { getAllMovies, getMovieById, addMovie } from '../controllers/movieController.js';

const router = express.Router();

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', addMovie);

export default router;
