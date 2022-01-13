'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        return queryInterface.bulkInsert('category', [
            {
                name: 'Slalom',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Slides',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Aggressive',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Jumps',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Downhill',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('category', null, {});
    }
};
