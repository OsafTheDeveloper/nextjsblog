import dbConnection from "@/db/db";
import userModel from "@/model/user";
await dbConnection();
async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const { id } = req.query;
        const singleUser = await userModel.findById(id);
        res.status(200).send({
          message: "Your Single User",
          success: true,
          singleUser,
        });
      } catch (error) {
        console.log(error, "from dynamic Get API");
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
