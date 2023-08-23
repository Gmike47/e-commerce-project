const express = require('express');
const server = express();
const Port = 3000;

server.set('port',  process.env.PORT || Port);

server.listen(Port, () => {
    console.log(`Listening on port ${Port}`)
});