import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import {
  createCharger,
  getAllChargers,
  getChargerById,
  updateCharger,
  deleteCharger
} from '../controller/charger.controller.js';

const router = express.Router();


router.use(authMiddleware);

router.post('/', createCharger);
router.get('/', getAllChargers);
router.get('/:id', getChargerById);
router.put('/:id', updateCharger);
router.delete('/:id', deleteCharger);

export default router;