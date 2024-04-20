import { Sequelize } from "sequelize";
const sequelizeMedusa = new Sequelize(
  "medusacit",
  "postgres",
  "SyedOsafHaiderZaidi@EdifyCollegeOfIT",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
const pgdbConnection = async () => {
  try {
    await sequelizeMedusa.authenticate();
    console.log("Postgres is Connected Succesfully");
  } catch (error) {
    console.log(error, "error from postgresConnection");
  }
};
export { sequelizeMedusa, pgdbConnection };
