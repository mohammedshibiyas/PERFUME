import { Router } from "express";
import * as controller from './controller.js'
import Auth from "./Auth.js";
import Autha from "./Autha.js";
import multer from "multer";


const router=Router();


router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/forgotadmpwd").patch(controller.adminFrgtPwd);

// category
router.route("/addcategory").post(controller.addCategory);
router.route("/getcategory").get(controller.getCategory);
router.route("/delcategory/:id").delete(controller.delCategory);
router.route("/editcategory/:id").patch(controller.EditCategory);
router.route("/getdetails/:id").post(controller.getfullcategory);

// product
// const storage = multer.diskStorage({
//     destination: "./images",
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({ storage: storage });
// router.route('/addProduct').post(upload.array( 'images'), controller.AddProducts);
// router.route("/image/:filename").get(controller.SetPath)
router.route('/getcategorywise/:category').get(controller.getcategorywise)
router.route('/addProduct').post(controller.AddProducts)
router.route('/delproduct/:id').delete(controller.delproduct)

// customer
router.route('/addcustomer').post(controller.addCustomer)
router.route('/logincustomer').post(controller.loginCustomer)
router.route('/customerhome').get(Autha,controller.customerHome)


export default router;