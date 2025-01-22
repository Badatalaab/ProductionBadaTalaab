import JWT from "jsonwebtoken";
import AdminModel from "../Models/AdminModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.jwt_secretkey
    );
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).send({
      success: false,
      error,
      message: "error in Admin middleware",
    });
  }
};

//Admin access

export const isAdmin = async (req, res, next) => {
  try {
    const user = await AdminModel.findById(req.user._id);
    if (user.Role !== "1") {
      return res.status(401).send({
        success: false,
        message: "Unauthorization Access",
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(401).send({
      success: false,
      error,
      message: "error in Admin middleware",
    });
  }
};
