module.exports = {
    database: process.env.MONGODB_URI || 'mongodb://localhost/todoApp',
    port: process.env.PORT || 8080,
};