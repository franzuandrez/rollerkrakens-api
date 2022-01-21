'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tricksUnlocked', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trainingSkaterId: {
        type: Sequelize.INTEGER,
      },
      trickId: {
        type: Sequelize.INTEGER,
        references:{
          model:'trick',
          key:'id'
        }
      },
      skaterSetupId: {
        type: Sequelize.INTEGER,
        references:{
          model:'skater_setups',
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
    await queryInterface.dropTable('tricksUnlocked');
  }
};