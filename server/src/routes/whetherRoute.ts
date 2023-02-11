import { Router } from "express";
const router = Router();

import whetherController from '../controllers/whetherRoute';

//su**
router.get('/getwhether',whetherController.getWhether);

//admin**


export default router;