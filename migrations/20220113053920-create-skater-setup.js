'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('skater_setups', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            skaterId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'skater',
                    key: 'id'
                }
            },
            setupId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'setup',
                    key: 'id'
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
        await queryInterface.dropTable('skater_setups');
    }
};