import { DataTypes } from 'sequelize';
import { database } from '../../database/database.js';

const AccentWords = database.define('accentword', {
  words_id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  sets_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  true_word: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  false_word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    timestamps: false,
  }
);

export { AccentWords };
