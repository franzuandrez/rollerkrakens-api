'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SkatePart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SkatePart.init({
    type: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SkatePart',
  });
  return SkatePart;
};