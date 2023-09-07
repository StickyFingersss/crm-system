const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Customer, Team }) {
      // define association here
      this.hasMany(Customer, { foreignKey: 'status_id' });
      this.belongsTo(Team, { foreignKey: 'team_id' });
    }
  }
  Status.init({
    name: DataTypes.STRING,
    team_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};
