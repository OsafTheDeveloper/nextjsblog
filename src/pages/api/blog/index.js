import dbConnection from "@/db/db";
import blogModel from "@/model/blog";
await dbConnection();
async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        
        const { title, subdesc, category, desc, image } = req.body;
        const createdBlog = await blogModel.create({
          title,
          subdesc,
          category,
          desc,
          image,
        });
        res.status(201).send({
          message: "Blog Added",
          success: true,
          createdBlog,
        });
      } catch (error) {
        console.log(error, "from blog Post API");
        res.status(500).send({
          message: "Internal Server Error",
          success: false,
        });
      }

      break;
    case "GET":
      try {
        const allBlogs = await blogModel.find();
        res.status(200).send({
          message: "All Blogs",
          success: true,
          data: allBlogs,
        });
      } catch (error) {
        console.log(error, "from blog Get API");
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
