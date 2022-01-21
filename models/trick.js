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
      this.belongsTo(models.category, {through: 'categoryId', as: 'category'});

    }
  };
  Trick.init({
    englishName: DataTypes.STRING,
    spanishName: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    difficultyLevelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trick',
  });
  return Trick;
};