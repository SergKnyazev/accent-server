import { DataTypes } from 'sequelize';
import { database } from '../../database/database.js';

const AccentSets = database.define('accentset', {
    sets_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    users_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sets_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    is_system: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export { AccentSets };
