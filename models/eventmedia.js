'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.event, {through: 'event_id', as: 'event'});
    }
  };
  EventMedia.init({
    path: DataTypes.STRING,
    mediaType: DataTypes.STRING,
    name: DataTypes.STRING,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EventMedia',
  });
  return EventMedia;
};