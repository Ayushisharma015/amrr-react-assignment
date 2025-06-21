import express from 'express';
import { createItem, getItems, sendEnquiry } from '../controllers/itemController.js';

const router = express.Router();

router.post('/items', createItem);
router.get('/items', getItems);
router.post('/enquire', sendEnquiry);

export default router;
