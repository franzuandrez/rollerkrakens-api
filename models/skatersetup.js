'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SkaterSetup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SkaterSetup.init({
    skaterId: DataTypes.INTEGER,
    setupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SkaterSetup',
  });
  return SkaterSetup;
};