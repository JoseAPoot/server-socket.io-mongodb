const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.info('DB Online');
    } catch (error) {
        console.error(error);
        throw new Error('Error en la base de datos - Comuniquese con el admin');
    }
}

module.exports = {
    dbConnection
}