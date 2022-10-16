'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Victim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Victim.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    public_id : {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      comment: 'UUID primarily used for client server identity communication',
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    country: {
      type: Sequelize.STRING
    },
    status: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    address: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'victims',
  });
  return Victim;
};