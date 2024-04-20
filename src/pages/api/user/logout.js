import { serialize } from "cookie";
export default async function POST(req, res) {
  try {
    res.setHeader(
      "Set-Cookie",
      serialize("AccessToken", "", {
        path: "/",
        httpOnly: true,
        secure: true,
        maxAge: 10 * 60 * 1000,
      })
    );
    res.status(200).json({
      success: true,
      message: "User Logged Out!!!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Errror",
    });
  }
}
