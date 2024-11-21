const { User, UserSchema } = require('./userModel')
const { Balance, BalanceSchema } = require('./BalanceModel')
const { Record, RecordSchema } = require('./recordsModels')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Balance.init(BalanceSchema, Balance.config(sequelize))
  Record.init(RecordSchema, Record.config(sequelize))

  User.associate(sequelize.models)
  Balance.associate(sequelize.models)
  Record.associate(sequelize.models)

}

module.exports = setupModels