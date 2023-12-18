import { Router } from "express";
import * as controller from './controller.js'
import Auth from "./Auth.js";


const router=Router();

router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/forgotadmpwd").patch(controller.adminFrgtPwd);

// category
router.route("/addcategory").post(controller.addCategory);
router.route("/getcategory").get(controller.getCategory);
router.route("/delcategory/:id").delete(controller.delCategory);

// product
router.route("/addproduct").post(controller.addProduct);




export default router;