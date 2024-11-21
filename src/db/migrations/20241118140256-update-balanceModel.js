'use strict';
const { BALANCE_TABLE, BalanceSchema } = require('../models/BalanceModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(BALANCE_TABLE, 'zone', {
      type: Sequelize.STRING,
    })
    await queryInterface.addColumn(BALANCE_TABLE, 'sub_zone', {
      type: Sequelize.STRING,
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(BALANCE_TABLE);
  }
};
