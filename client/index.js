const Express = require('express');
const path = require('path');
const app = Express();
const PORT = 8080;

app.use(Express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
    console.log(`Launching http://localhost:${PORT}`);
});