import dbConnection from "@/db/db";
import adminModel from "@/model/admin";
import bcrypt from "bcryptjs";
await dbConnection();
async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const { name, email, password } = req.body;
        const saltRound = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
        const hashed = await bcrypt.hash(password, saltRound);
        const createdAdmin = await adminModel.create({
          name,
          password: hashed,
          email,
        });
        res.status(201).send({
          message: "Now Your Are Admin",
          success: true,
          data: createdAdmin,
        });
      } catch (error) {
        console.log(error, "from 15 line admin POST req");
        res.status(500).send({
          message: "SomeThing Went Wrong",
          success: false,
        });
      }
      break;

    default:
      break;
  }
}
export default handler;
