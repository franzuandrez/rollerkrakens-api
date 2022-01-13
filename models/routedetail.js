'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RouteDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RouteDetail.init({
    maxSpeed: DataTypes.DOUBLE,
    avgSpeed: DataTypes.DOUBLE,
    trainingSkaterId: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RouteDetail',
  });
  return RouteDetail;
};