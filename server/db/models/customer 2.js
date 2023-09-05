'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'manager_id' });
      this.belongsToMany(User, { through: 'Comments', foreignKey: 'user_id' });
      this.belongsToMany(User, { through: 'Calls', foreignKey: 'user_id' });
    }
  }
  Customer.init({
    name: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING,
    manager_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};