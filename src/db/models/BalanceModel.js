const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel")

const BALANCE_TABLE = "balance";

const BalanceSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand:{
    type: DataTypes.STRING,
    allowNull: false
  },
  maximumWeight: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  minimumWeight: {
    type: DataTypes.STRING,
    allowNull: true
  },
  serial:{
    type: DataTypes.STRING,
    allowNull: true
  },
  zone:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  subZone:{
    type: DataTypes.STRING,
    allowNull: false,
    field:'sub_zone'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW
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
  },
  updateAt:{
    type: DataTypes.DATE,
    allowNull: true,
    field: 'update_at',
    defaultValue: Sequelize.NOW
  },
  updateBy:{
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  observations: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
};

class Balance extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BALANCE_TABLE,
      modelName: 'Balance',
      timestamps: false
    }
  }
}

module.exports = {
  BALANCE_TABLE,
  BalanceSchema,
  Balance
}