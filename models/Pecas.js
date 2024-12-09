module.exports = (sequelize, DataTypes) => {
    const Peca = sequelize.define('Peca', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.DOUBLE
    }, {});
    return Peca;
};
 


