const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { m, n, metodo } = req.body;
  let resultado;

  if (metodo === 'iterativo') {
    resultado = iterativo(m, n);
  } else if (metodo === 'recursivo') {
    resultado = recursivo(m, n);
  } else {
    return res.status(400).json({ error: 'Invalid metodo' });
  }

  return res.json({ result: resultado });
});

function iterativo(m, n) {
  let prod = 1;
  for (let i = m; i <= n; i++) {
    prod *= i;
  }
  return prod;
}

function recursivo(m, n) {
  if (m > n) {
    return 1;
  }
  return m * recursivo(m + 1, n);
}

module.exports = router;
