'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trainingSkater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trainingSkater.init({
    skaterId: DataTypes.INTEGER,
    trainingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TrainingSkater',
  });
  return trainingSkater;
};