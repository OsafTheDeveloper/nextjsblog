import { pgdbConnection } from "@/db/postgres";
import Userschema from "@/model/medusauser";
export default async function GET(req, res) {
  try {
    await pgdbConnection();
    const { id } = req.query;
    console.log(id, "from 7 line");
    const user = await Userschema.findByPk(id);
    console.log(user);
    res.status(200).send({
      message: "user found",
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error, "from get individual api");
    res.status(500).send({
      message: "user not found",
      success: false,
    });
  }
}
