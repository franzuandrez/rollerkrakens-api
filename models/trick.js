'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trick.init({
    englishName: DataTypes.STRING,
    spanishName: DataTypes.STRING,
    subcategoryId: DataTypes.INTEGER,
    dificultyLevelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trick',
  });
  return Trick;
};