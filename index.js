const express = require("express");
const cors = require("cors");

const api = express();

api.use(express.json());
api.use(cors());

api.listen(8080, () => {
    console.log('Api rodando - localhost: 8080');
});

require('./routes/index')(api);