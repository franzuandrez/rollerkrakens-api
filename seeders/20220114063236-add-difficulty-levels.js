'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('difficulty_level', [
            {
                name: 'Básico',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Principiante',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Intermedio',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Avanzado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Master',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gran-Master',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Leyenda',
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
    }
};
