import dbConnection from "@/db/db";
import userModel from "@/model/user";
import bcrypt from "bcryptjs";
import { tokenGenerator, tokenVerification } from "@/helper/jwt";
import { serialize } from "cookie";
await dbConnection();
async function POST(req, res) {
  try {
    const { email, password } = req.body;
    const findbyemail = await userModel.findOne({ email: email });
    const comparePassword = await bcrypt.compare(
      password,
      findbyemail.password
    );
    if (!findbyemail || !comparePassword) {
      res.status(404).send({
        message: "Invalid Username or Password",
        success: false,
      });
    }
    const user = {
      _id: findbyemail._id,
      username: findbyemail.username,
    };
    const generatedToken = await tokenGenerator(user);
    const expirationTime = new Date(Date.now() + 10 * 60 * 1000);
    res.setHeader(
      "Set-Cookie",
      serialize("AccessToken", generatedToken, {
        path: "/",
        httpOnly: true,
        secure: true,
        expires: expirationTime,
      })
    );

    res.status(200).send({
      message: "You Logged In ",
      success: true,
    });
  } catch (error) {
    console.log(error, "from LoginAPI");
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
}
export default POST;
