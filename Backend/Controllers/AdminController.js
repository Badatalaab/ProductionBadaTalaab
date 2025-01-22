import { comparepassword, hashPassword } from "../Authhelpers/authHelper.js";
import AdminModel from "../Models/AdminModel.js";
import JWT from "jsonwebtoken";

export const createAdmin = async (req, res) => {
  try {
    const { Name, Email, Password, Phone } = req.body;

    if (!Name) {
      return res.send({ message: "Name is Required" });
    }
    if (!Email) {
      return res.send({ message: "Email is Required" });
    }
    if (!Password) {
      return res.send({ message: "Password is Required" });
    }
    if (!Phone) {
      return res.send({ message: "Phone is Required" });
    }

    //existing checking
    const existuser = await AdminModel.findOne({ Email });
    if (existuser) {
      return res.status(200).send({
        success: false,
        message: "Already register please login",
      });
    }
    //registering user
    const Hasedpassword = await hashPassword(Password);
    const user = await new AdminModel({
      Name,
      Email,
      Phone,
      Password: Hasedpassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "Admin added successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in Registration",
      error,
    });
  }
};

// loginController

export const loginController = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await AdminModel.findOne({ Email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparepassword(Password, user.Password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = JWT.sign({ _id: user.id }, process.env.jwt_secretkey, {
      expiresIn: "1d",
    });

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        id: user._id,
        Name: user.Name,
        Phone: user.Phone,
        Email: user.Email,
        Password: user.Password,
        Role: user.Role,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};

//get all admin
export const allAdmin = async (req, res) => {
  try {
    const Admins = await AdminModel.find({});
    if (!Admins) {
      return res.status(401).send({
        success: false,
        message: "No Admins exist",
      });
    }
    return res.status(201).send({
      success: true,
      message: "All Admins Are here",
      Admins,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something gone wrong in Geting all Admins",
      error,
    });
  }
};

//update prfole
export const updateProfileController = async (req, res) => {
  try {
    const { id, Name, Email, Password, Phone, changepassword } = req.body;
    const user = await AdminModel.findById(id);

    //password
    if (Password && Password.length < 6) {
      return res.json({ error: "Passsword is required and 6 character long" });
    }
    const hashedPassword =
      changepassword === true
        ? Password
          ? await hashPassword(Password)
          : undefined
        : Password;

    const updatedUser = await AdminModel.findByIdAndUpdate(
      id,
      {
        Name: Name || user.name,
        Password: hashedPassword || user.password,
        Phone: Phone || user.Phone,
        Email: Email || user.Email,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error While Update profile",
      error,
    });
  }
};

//delete admin

export const deleteadminModel = async (req, res) => {
  try {
    await AdminModel.findByIdAndDelete(req.params.pid);
    res.status(200).send({
      success: true,
      message: "admin deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting admin",
      error,
    });
  }
};
