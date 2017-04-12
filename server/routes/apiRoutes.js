module.exports = (app) => {
    const item = require('../controller/todoItemController');

    app.get('/api/get', item.get);
    app.post('/api/create', item.create);
    
};