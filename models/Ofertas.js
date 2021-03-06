module.exports = (connection, DataTypes) => {

    const model = connection.define('Ofertas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      imagemProduto: {
        type: DataTypes.STRING(100)
      },
      nomeProduto: {
        type: DataTypes.STRING(50)
      },
      valorOriginal: {
        type: DataTypes.FLOAT(10)
      },
      valorPromocional: {
        type: DataTypes.FLOAT(10)
      }
    }, {
      timestamps: false,
      tableName: 'ofertas'
    })
  
    return model
  }
  