import { DataTypes } from "sequelize";
import { sequelizeMedusa } from "@/db/postgres";
const Userschema = sequelizeMedusa.define("medusaUser", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
 
});

Userschema.sync()
  .then(() => {
    console.log("User model is synced");
  })
  .catch((e) => {
    console.log(e, "User model not synced");
  });

export default Userschema;
