import Express from "express";
import {
  allUserdata,
  createUserdata,
  deleteFormdata,
} from "../Controllers/FormDataController.js";

//router obj
const router = Express.Router();

router.post("/createUserdata", createUserdata);
router.get("/allUserdata", allUserdata);
//delete user form data
router.delete("/delete-user-data/:pid", deleteFormdata);

export default router;
