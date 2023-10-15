const express = require("express");
const cors = require("cors");

const api = express();

api.use(express.json());
api.use(cors());

api.listen(8001, () => {
    console.log('Api rodando - localhost: 8000');
});

require('./routes/index')(api);