const mongoose = require('mongoose');

module.exports = app => {
    app.post('/api/note', (req, res) => {
        console.log(req.body);  
    });
}