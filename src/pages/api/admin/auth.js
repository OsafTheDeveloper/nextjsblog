import dbConnection from "@/db/db";
import adminModel from "@/model/admin";
import bcrypt from "bcryptjs";
import { adminTokenGenerator } from "@/helper/jwt";
import { serialize } from "cookie";
await dbConnection();
export default async function POST(req, res) {
  try {
    const { email, password } = req.body;
    const findbyemail = await adminModel.findOne({ email: email });
    const comparePassword = await bcrypt.compare(
      password,
      findbyemail.password
    );
    if (!findbyemail || !comparePassword) {
      res.status(404).send({
        message: "Invalid name or Password",
        success: false,
      });
    }
    const admin = {
      _id: findbyemail._id,
      name: findbyemail.name,
    };
    const adminToken = await adminTokenGenerator(admin);
    res.setHeader(
      "Set-Cookie",
      serialize("AdminToken", adminToken, {
        path: "/",
        httpOnly: true,
        secure: true,
        maxAge: 20 * 60,
      })
    );
    res.status(200).send({
      message: "Welcome Admin",
      success: true,
    });
  } catch (error) {
    console.log(error, "from AdminAuth");
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
}
