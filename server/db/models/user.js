const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Team, Customer, Task }) {
      // define association here
      this.belongsTo(Team, { foreignKey: 'team_id' });
      this.hasMany(Customer, { foreignKey: 'manager_id' });
      this.belongsToMany(Customer, { through: 'Comments', foreignKey: 'customer_id' });
      this.belongsToMany(Customer, { through: 'Calls', foreignKey: 'customer_id' });
      this.hasMany(Task, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    team_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
