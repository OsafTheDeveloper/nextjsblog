import { SignJWT, jwtVerify } from "jose";

// Generate The Token
async function tokenGenerator(data) {
  try {
    const token = await new SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("20m")
      .setIssuedAt()
      .sign(new TextEncoder().encode(process.env.ADMIN_SECRET_KEY));
    return token;
  } catch (error) {
    console.log(error, "from tokenGenerator");
  }
}
// Check Token Verification
async function tokenVerification(token) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.ADMIN_SECRET_KEY)
    );
    return payload;
  } catch (error) {
    console.log(error, "from tokenVerification");
  }
}

// Admin token Generated

async function adminTokenGenerator(data) {
  try {
    const token = await new SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("20m")
      .setIssuedAt()
      .sign(new TextEncoder().encode(process.env.SECRET_KEY));
    return token;
  } catch (error) {
    console.log(error, "from admintokenGenerator");
  }
}
// Admin TokenVerification
async function adminTokenverification(admintoken) {
  try {
    const { payload } = await jwtVerify(
      admintoken,
      new TextEncoder().encode(process.env.SECRET_KEY)
    );
    return payload;
  } catch (error) {
    console.log(error, "from admintokenVerification");
  }
}

export { tokenGenerator, tokenVerification,adminTokenGenerator,adminTokenverification };
