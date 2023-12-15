import { Router } from "express";
import * as controller from './controller.js'


const router=Router();

router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);


export default router;