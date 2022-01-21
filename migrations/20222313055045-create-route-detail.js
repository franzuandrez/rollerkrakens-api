'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('route_detail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maxSpeed: {
        type: Sequelize.DOUBLE
      },
      avgSpeed: {
        type: Sequelize.DOUBLE
      },
      trainingSkaterId: {
        type: Sequelize.INTEGER
      },
      routeId: {
        type: Sequelize.INTEGER,
        references:{
          model:'route',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('route_detail');
  }
};