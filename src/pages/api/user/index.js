import dbConnection from "@/db/db";
import userModel from "@/model/user";
import bcrypt from "bcryptjs";
await dbConnection();
async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const { username, email, password } = req.body;
        const saltRound = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
        const hashed = await bcrypt.hash(password, saltRound);
        const createdUser = await userModel.create({
          username,
          email,
          password: hashed,
        });
        console.log(createdUser);
        res.status(201).send({
          message: "User Registerd",
          success: true,
          createdUser,
        });
      } catch (error) {
        console.log(error, "from userPost API");
        res.status(500).send({
          message: "Internal Server Error",
          success: false,
        });
      }

      break;
    case "GET":
      try {
        const allUsers = await userModel.find();
        res.status(200).send({
          message: "All Users",
          success: true,
          allUsers,
        });
      } catch (error) {
        console.log(error, "from userGet API");
        res.status(500).send({
          message: "Internal Server Error",
          success: false,
        });
      }

      break;

    default:
      break;
  }
}
export default handler;
