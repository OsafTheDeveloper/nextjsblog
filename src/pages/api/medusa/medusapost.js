import { pgdbConnection } from "@/db/postgres";
import Postschema from "@/model/medusapost";
export default async function POST(req, res) {
  try {
    await pgdbConnection();
    const { post } = req.body;
    const Createdpost = await Postschema.create({ post });
    console.log(Createdpost, "from 8 line post api");
    res.status(201).json({
      message: "post Created ",
      success: true,
      data: Createdpost,
      
    });
  } catch (error) {
    console.log(error, "from POST api");
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
}
