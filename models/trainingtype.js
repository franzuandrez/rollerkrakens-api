'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TrainingType.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TrainingType',
  });
  return TrainingType;
};