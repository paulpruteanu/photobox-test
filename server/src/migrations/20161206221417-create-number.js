'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        let numbers = [];
        for (let number = -100; number <= 100; number++) {
            numbers.push({number});
        }

        queryInterface.createTable('Numbers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            number: {
                type: Sequelize.INTEGER
            }
        });

        return queryInterface.bulkInsert('Numbers', numbers);
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Numbers');
    }
};