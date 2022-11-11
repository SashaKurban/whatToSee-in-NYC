"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {}

  Event.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      date: {
        type: DataTypes.DATEONLY,
        validate: { isDate: true },
        notEmpty: true,
      },
      description: {
        type: DataTypes.TEXT,
        validate: { 
          notEmpty: true,
         },
      },
      link: {
        type: DataTypes.STRING,
        validate: { 
            isUrl: true,
         },
      },
      price: {
        type: DataTypes.DOUBLE,
        validate: { 
            notEmpty: true,
            min: 0,
         },
      },
      address: {
        type: DataTypes.STRING,
        validate: { 
            len: [3, 250],
            notEmpty: true,
         },
      },
    },
    {
      sequelize,
      modelName: "Event",
    }
  );

  Event.associate = (models) => {
    // associations can be defined here
    // models.Event.belongsTo(models.User);
    // models.Event.belongsTo(models.Category);
  };

  return Event;
};
