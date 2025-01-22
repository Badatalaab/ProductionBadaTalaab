import FormDataModel from "../Models/FormDataModel.js";

export const createUserdata = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Phone, Message } = req.body;

    if (!FirstName) {
      return res.send({ message: "Name is Required" });
    }
    if (!LastName) {
      return res.send({ message: "LastName is Required" });
    }
    if (!Email) {
      return res.send({ message: "Email is Required" });
    }
    if (!Phone) {
      return res.send({ message: "Phone is Required" });
    }
    if (!Message) {
      return res.send({ message: "Message is Required" });
    }

    //existing checking
    const existuser = await FormDataModel.findOne({ Email });
    if (existuser) {
      return res.status(200).send({
        success: false,
        message:
          "Already Message Sent With This Email Please Wait For Response",
      });
    }
    //registering user

    const user = await new FormDataModel({
      FirstName,
      LastName,
      Email,
      Phone,
      Message,
    }).save();
    res.status(201).send({
      success: true,
      message:
        "Your message has been successfully submitted! Our team will be in touch with you shortly. Thank you for reaching out to us!",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in sending Message",
      error,
    });
  }
};

export const allUserdata = async (req, res) => {
  try {
    const Data = await FormDataModel.find({});
    if (!Data) {
      return res.status(401).send({
        success: false,
        message: "No Data exist",
      });
    }
    return res.status(201).send({
      success: true,
      message: "All Data is here",
      Data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something gone wrong in Geting all Data",
      error,
    });
  }
};

//delete user form data

export const deleteFormdata = async (req, res) => {
  try {
    await FormDataModel.findByIdAndDelete(req.params.pid);
    res.status(200).send({
      success: true,
      message: "User details deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting User details",
      error,
    });
  }
};
