const express = require('express');
const bodyParser = require('body-parser');
const produtorioRouter = require('./index');

const app = express();
app.use(bodyParser.json());
app.use('/produtorio', produtorioRouter);
const port = 3000;

app.listen(port, () => {
  console.log(`Server funcionando na porta ${port}`);
});