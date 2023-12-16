import { Router } from "express";
import * as controller from './controller.js'
import Auth from "./Auth.js";


const router=Router();

router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/forgotadmpwd").patch(controller.adminFrgtPwd);



export default router;