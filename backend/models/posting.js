"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posting.belongsTo(models.User);
    }
  }
  Posting.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      caption: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (posting, options) => {
          posting.image = posting.image || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "Posting",
    }
  );
  return Posting;
};
