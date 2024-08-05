async function paginar(req, res, next) {
    try {
      let { limite = 5, pagina = 1, ordenacao = 'id:asc' } = req.query;
  
      let [campoOrdenacao, ordem] = ordenacao.split(':');
  
      limite = parseInt(limite);
      pagina = parseInt(pagina);
  
      const resultados = req.resultados;
  
      if (limite > 0 && pagina > 0) {
        const inicio = (pagina - 1) * limite;
        const resultadoPaginado = resultados.slice(inicio, inicio + limite);
        resultadoPaginado.sort((a, b) => {
          if (ordem === 'asc') {
            return a[campoOrdenacao] > b[campoOrdenacao] ? 1 : -1;
          } else {
            return a[campoOrdenacao] < b[campoOrdenacao] ? 1 : -1;
          }
        });
        res.status(200).json(resultadoPaginado);
      } else {
        res.status(400).json({ erro: "Os parâmetros de paginação devem ser maiores que zero." });
      }
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
  
  export default paginar;
  