'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('trick', [
            {
                englishName: 'Slalom',
                spanishName: 'prueba2',
                subcategoryId:1,
                dificultyLevelId:1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('trick', null, {});
    }
};
