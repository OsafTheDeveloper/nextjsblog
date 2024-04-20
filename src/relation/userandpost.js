import Userschema from "@/model/medusauser";
import Postschema from "@/model/medusapost";
Userschema.hasMany(Postschema, { foreignKey: "id" });
Postschema.belongsTo(Userschema, { foreignKey: "id" });
