'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('route', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            startLocationId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'location',
                    key: 'id'
                }
            },
            endLocationId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'location',
                    key: 'id'
                }
            },
            trainingId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'training',
                    key: 'id'
                }
            },
            name: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('route');
    }
};