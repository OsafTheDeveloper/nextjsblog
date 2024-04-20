import { DataTypes } from "sequelize";
import { sequelizeMedusa } from "@/db/postgres";
import Userschema from "./medusauser";

const Postschema = sequelizeMedusa.define("medusaPost", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  post: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.UUID,
  },
});
Userschema.hasMany(Postschema, { foreignKey: "userId" });
Postschema.belongsTo(Userschema);
Postschema.sync()
  .then(() => {
    console.log("Post model is synced");
  })
  .catch((e) => {
    console.log(e, "Post model not synced");
  });

export default Postschema;
