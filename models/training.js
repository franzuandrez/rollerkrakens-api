'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Training.init({
    locationId: DataTypes.INTEGER,
    startedAt: DataTypes.DATE,
    endedAt: DataTypes.DATE,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Training',
  });
  return Training;
};