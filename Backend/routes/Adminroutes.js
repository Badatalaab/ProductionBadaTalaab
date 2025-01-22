import Express from "express";
import formidableMiddleware from "express-formidable";
import {
  allAdmin,
  createAdmin,
  deleteadminModel,
  loginController,
  updateProfileController,
} from "../Controllers/AdminController.js";
import { isAdmin, requireSignIn } from "../Middlewares/Authmiddlewares.js";

//router obj
const router = Express.Router();
//create admin
router.post("/createAdmin", createAdmin);
//get all admin
router.get("/allAdmin", allAdmin);
//update profile
router.put("/updateprofile", updateProfileController);
//login //method post
router.post("/login", loginController);

//Protected User route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  return res.status(200).send({ ok: true });
});
//Protected Admin route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  return res.status(200).send({ ok: true });
});
//delete product
router.delete("/delete-admin/:pid", deleteadminModel);

export default router;
