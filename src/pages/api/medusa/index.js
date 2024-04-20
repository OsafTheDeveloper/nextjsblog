import Userschema from "@/model/medusauser";
import { pgdbConnection } from "@/db/postgres";
import Postschema from "@/model/medusapost";
export default async function POST(req, res) {
  try {
    await pgdbConnection();
    const { username, email } = req.body;
    const user = await Userschema.create({ username, email });
    console.log(user, "from 8 line post api");
    console.log(user.id);
    if (user && user.id) {
      try {
        const createdPost = await Postschema.create({
          post: "nedklnwekndoiwendionwoeibfdowednkxwekoxmwednkwoein",
          userId: user.id,
        });
        console.log(createdPost[0],"from 17 line");
      } catch (error) {
        console.log(error, "from 18 line");
      }
    }
    res.status(201).json({
      message: "User Created ",
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error, "from POST api");
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
}
