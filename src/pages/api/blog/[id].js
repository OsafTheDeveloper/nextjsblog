import dbConnection from "@/db/db";
import blogModel from "@/model/blog";
await dbConnection();
async function handler(req,res) {
  switch (req.method) {
    case "GET":
      try {
        const { id } = req.query;
        const singleBlog = await blogModel.findById(id);
        res.status(200).send({
          success: true,
          data: singleBlog,
        });
      } catch (error) {
        console.log(error, "from dynamic api Get");
        res.status(500).send({
          success: false,
          message: "SomeThing Went Wrong",
        });
      }
      break;

    default:
      break;
  }
}
export default handler;
