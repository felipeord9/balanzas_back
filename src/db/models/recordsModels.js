const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel")
const { BALANCE_TABLE } = require('./BalanceModel')

const RECORD_TABLE = "record";

const RecordSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstWeight: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_weight",
  },
  secondWeight: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "second_weight",
  },
  thirdWeight: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "third_weight",
  },
  fourthWeight: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "fourth_weight",
  },
  fifthWeight: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "fifth_weight",
  },
  date:{
    type: DataTypes.DATE,
    allowNull: false
  },
  hour: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balanceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'balance_id',
    references: {
      model: BALANCE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'created_by',
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  }
};

class Record extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user'})
    this.belongsTo(models.Balance, { as: 'balance'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECORD_TABLE,
      modelName: 'Record',
      timestamps: false
    }
  }
}

module.exports = {
  RECORD_TABLE,
  RecordSchema,
  Record
}