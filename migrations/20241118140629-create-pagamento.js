'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pagamentos', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      tipo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      desconto: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      // id_servico: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue:  Sequelize.fn('NOW')
      }
    });
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('pagamentos');

  }
};