'use strict';
const { BALANCE_TABLE, BalanceSchema } = require('../models/BalanceModel')
const { RECORD_TABLE, RecordSchema } = require('../models/recordsModels')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(BALANCE_TABLE, BalanceSchema);
    await queryInterface.createTable(RECORD_TABLE, RecordSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(BALANCE_TABLE);
    await queryInterface.dropTable(RECORD_TABLE);

  }
};

