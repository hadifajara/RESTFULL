module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
          },
          name: {
            type : DataTypes.STRING,
            allowNull : false
          },
          brand: {
            type : DataTypes.STRING
          },
          description : {
            type : DataTypes.TEXT
          },
          createdAt : {
            type : DataTypes.DATE,
            allowNull : false
          },
          updatedAt : {
            type : DataTypes.DATE,
            allowNull : false
          }
    },{
        tableName : 'products'
    });

    return Products;
}