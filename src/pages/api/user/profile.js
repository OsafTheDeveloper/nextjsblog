import dbConnection from "@/db/db";
import userModel from "@/model/user";
import { tokenVerification } from "@/helper/jwt";
export default async function GET(req, res) {
  await dbConnection();
  try {
    const token = req.cookies.AccessToken;
    const isTokenverify = await tokenVerification(token);
    const user = await userModel.findById(isTokenverify._id);
    if (token) {
      res.status(200).send({
        message: "User Found",
        data: user,
        success: true,
      });
    } else {
      res.status(404).send({
        message: "User not Found",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Interval Server Error",
      success: true,
    });
  }
}
