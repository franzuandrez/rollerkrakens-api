'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('training', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            locationId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'location',
                    key: 'id'
                }
            },
            startedAt: {
                type: Sequelize.DATE
            },
            endedAt: {
                type: Sequelize.DATE
            },
            typeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'trainingType',
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
        await queryInterface.dropTable('training');
    }
};