import { pgdbConnection } from "@/db/postgres";
import Userschema from "@/model/medusauser";
export default async function GET(req, res) {
  try {
    await pgdbConnection();
    const allUsers = await Userschema.findAll();
    res.status(200).json({
      message: "all Users",
      success: true,
      data: allUsers,
    });
  } catch (error) {
    console.log(error, "from GET api");
    res.status(500).json({
      message: "internal server error ",
      success: false,
    });
  }
}
