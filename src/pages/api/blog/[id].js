import dbConnection from "@/db/db";
import blogModel from "@/model/blog";
await dbConnection();
async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const { id } = req.query;
        const singleBlog = await blogModel.findById(id);
        res.status(200).send({
          success: true,
          message: "Here is single",
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
    case "DELETE":
      try {
        const { id } = req.query;
        const singleBlog = await blogModel.findByIdAndDelete(id);
        res.status(200).send({
          success: true,
          message: "Blog Deleted",
          data: singleBlog,
        });
      } catch (error) {
        console.log(error, "from dynamic api Delete");
        res.status(500).send({
          success: false,
          message: "SomeThing Went Wrong",
        });
      }
      break;
    case "PUT":
      try {
        const { id } = req.query;
        const updateBlog = await blogModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(201).send({
          success: true,
          message: "Blog Updated",
          data: updateBlog,
        });
      } catch (error) {
        console.log(error, "from dynamic api Put");
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
