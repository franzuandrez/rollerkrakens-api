'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('media_skater', {
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
            mediaId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'event_media',
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
        await queryInterface.dropTable('media_skater');
    }
};