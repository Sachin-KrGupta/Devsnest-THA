const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "sachin1436",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connect established with db");
    } catch (err) {
        console.error("Unable to connect to db");
    }
})();

module.exports = sequelize;