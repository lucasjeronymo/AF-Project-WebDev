import { Router, Request, Response } from 'express';
import HeroController from './controllers/HeroController';

export const router = Router();

router.get('/api/heroes', HeroController.listAll);
router.get('/api/hero/:id', HeroController.get);
router.post('/api/hero', HeroController.create);
router.delete('/api/hero/:id', HeroController.delete);
router.put('/api/hero/:id', HeroController.update);